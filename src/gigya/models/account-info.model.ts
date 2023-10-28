import type { DateType } from '../../shared.model';
import type { GigyaAuthResponse } from './gigya-response.model';

/**
 * Response model of Gigya Account API.
 */
export interface AccountInfo extends GigyaAuthResponse {
  data?: Data;
  preferences?: Preferences;
  emails?: Emails;
  password?: Password;
}

interface Data {
  migrationCode?: string;
  gigyaImportJobID?: string;
  personId?: string;
  gigyaDataCenter?: string;
  migrationExternalId?: string;
}

interface Emails {
  verified?: string[];
  unverified?: any[];
}

interface Password {
  created?: DateType;
}

interface Preferences {
}
