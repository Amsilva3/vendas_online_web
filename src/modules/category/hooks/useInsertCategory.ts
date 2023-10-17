import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();

  useEffect(() => {
    if (!name) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [name]);

  const insertCategory = async () => {
    setLoading(true);
    await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name });
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    setLoading(false);
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return {
    name,
    disableButton,
    handleOnChangeName,
    insertCategory,
    loading,
  };
};
