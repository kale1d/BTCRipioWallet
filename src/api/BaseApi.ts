import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './config/apiRipioConfig';

export class BaseApi {
  /**
   * request
   * @param {AxiosRequestConfig} config
   */
  public request = async <T>(config: AxiosRequestConfig) => {
    return axiosInstance.request(config).then<T>(response => response.data);
  };

  configAxiosInstance = {
    'Content-Type': 'application/json',
  };
}
