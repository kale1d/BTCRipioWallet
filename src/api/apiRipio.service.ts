import { Method } from 'axios';
import { BaseApi } from './BaseApi';
import { RatesDTO } from '../types/models.types';
import { METHOD } from './config/methods';

const { GET } = METHOD;

class APIRipio extends BaseApi {
  /**
   * getPrices
   * GET /rates
   * @returns {Promise<RatesDTO>}
   */
  public getRates(): Promise<RatesDTO> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: '/rates',
    });
  }
}

export default new APIRipio();
