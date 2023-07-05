import axios from 'axios';

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../constants/errosStatus';
import { MethodsEnum } from '../../enums/methods.enum';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown) {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}
export const ConnectionAPIGet = async <T>(url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};
export const ConnectionAPIDelete = async <T>(url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};
export const ConnectionAPIPost = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};
export const ConnectionAPIPut = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};
export const ConnectionPatch = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};
