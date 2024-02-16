import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(true);
  const { request, loading } = useRequests();
  const { setCategories, category, setCategory } = useCategoryReducer();

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  useEffect(() => {
    if (!name) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [name]);

  useEffect(() => {
    if (categoryId) {
      request(URL_CATEGORY_ID.replace('{categoryId}', categoryId), MethodsEnum.GET, setCategory);
    } else {
      setName('');
    }
  }, [categoryId]);

  const insertCategory = async () => {
    if (categoryId) {
      await request(
        URL_CATEGORY_ID.replace('{categoryId}', categoryId),
        MethodsEnum.PUT,
        undefined,
        { name },
      );
    } else {
      await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name });
    }
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return {
    name,
    categoryId,
    disableButton,
    handleOnChangeName,
    insertCategory,
    loading,
  };
};
