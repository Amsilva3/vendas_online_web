import { Select } from 'antd';
import { useEffect } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { LimiteContainer } from '../styles/productinsert.style';

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  console.log('categories', categories);

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <LimiteContainer>
        <Input margin="0px 0px 16px 0px" title="Nome" placeholder="Nome" />
        <Input margin="0px 0px 16px 0px" title="Url imagem" placeholder="Url imagem" />
        <Input margin="0px 0px 16px 0px" title="Preço" placeholder="Preço" />
        <Select
          defaultValue="Lucy"
          style={{ width: '100%' }}
          onChange={handleChange}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button type="primary">Inserir produto</Button>
      </LimiteContainer>
    </Screen>
  );
};

export default ProductInsert;
