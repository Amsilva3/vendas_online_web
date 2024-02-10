import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRoutesEnum } from '../routes';

export const useProduct = () => {
  const { products, setProducts } = useProductReducer();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();
  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };
  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([
        ...productsFiltered.filter((products) => products.name.includes(value)),
      ]);
    }
  };
  const handleDeleteProduct = async (productId: number) => {
    await request(URL_PRODUCT_ID.replace('{productId}', `${productId}`), MethodsEnum.DELETE);
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };
  const handleEditProduct = async (productId: number) => {
    navigate(ProductRoutesEnum.PRODUCT_EDIT.replace(':productId', `${productId}`));
  };
  return {
    productsFiltered,
    handleOnClickInsert,
    onSearch,
    handleDeleteProduct,
    handleEditProduct,
  };
};
