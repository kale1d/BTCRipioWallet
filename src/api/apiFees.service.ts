import { Method } from 'axios';
import { BaseApi } from './BaseApi';
import { RatesDTO } from '../types/models.types';
import { METHOD } from './config/methods';

const { GET } = METHOD;

class APIFees extends BaseApi {
  /**
   * getFees
   * GET /fees/recommended
   * @returns {Promise<RatesDTO>}
   */
  public getFees(): Promise<RatesDTO> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: 'fees/recommended',
    });
  }
}

export default new APIFees();
