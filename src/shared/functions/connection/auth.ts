import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/AuthorizationConstants';
import { URL_USER } from '../../constants/urls';
import { ConnectionAPIGet } from './connectionAPI';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);
export const setAuthorizationToken = (token: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};
export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = '/login';
  }
  if (!user) {
    await ConnectionAPIGet<UserType>(URL_USER)
      .then((userReturn) => {
        setUser(userReturn);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = '/login';
      });
  }
  return null;
};
