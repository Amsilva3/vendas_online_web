import { Button } from 'antd';
import Search from 'antd/es/input/Search';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { ProductRoutesEnum } from '../routes';
import { BoxButtons, LimiteSizeButton } from '../styles/Product.style';

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];

const listBreadcrumb = [
  {
    name: 'HOME',
  },
  {
    name: 'PRODUTOS',
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
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
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButtons>
        <LimiteSizeButton>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimiteSizeButton>

        <Button type="primary" onClick={handleOnClickInsert}>
          Inserir
        </Button>
      </BoxButtons>

      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
