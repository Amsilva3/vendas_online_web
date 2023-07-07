import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { getAuthorizationToken, unsetAuthorizationToken } from '../../../shared/functions/connection/auth';
import { ConnectionAPIGet } from '../../../shared/functions/connection/connectionAPI';
import { LoginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await ConnectionAPIGet(URL_USER)
          .then(() => {
            navigate(ProductRoutesEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(LoginRoutesEnum.LOGIN);
          });
      } else {
        navigate(LoginRoutesEnum.LOGIN);
      }
    };
    verifyToken();
  }, []);

  return <Spin />;
};

export default FirstScreen;
