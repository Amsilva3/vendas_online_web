import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { LoginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
      navigate(LoginRoutesEnum.LOGIN);
    }
  });
  return <Spin />;
};

export default FirstScreen;
