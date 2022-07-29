import { Status } from '../../enums';
import { BaseGetRequestInput } from './base-get-request-input';

export interface ListBaseGetRequestInput extends BaseGetRequestInput {
  status?: Status;
}
