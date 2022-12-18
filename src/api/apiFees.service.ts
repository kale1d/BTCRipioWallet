import { Method } from 'axios';
import { BaseApi } from './BaseApiBTC';
import { FeesDTO } from '../types/models.types';
import { METHOD } from './config/methods';

const { GET } = METHOD;

class APIFees extends BaseApi {
  /**
   * getFees
   * GET /fees/recommended
   * @returns {Promise<FeesDTO>}
   */
  public getFees(): Promise<FeesDTO> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: 'fees/recommended',
    });
  }
}

export default new APIFees();
