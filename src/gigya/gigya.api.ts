const GIGYA_URL = 'https://accounts.eu1.gigya.com' as const satisfies string;

const ACCOUNTS_URL = `${GIGYA_URL}/accounts` as const satisfies string;
const LOGIN_URL = `${ACCOUNTS_URL}.login` as const satisfies string;
const GET_ACCOUNT_INFO_URL = `${ACCOUNTS_URL}.getAccountInfo` as const satisfies string;
const GET_JWT_URL = `${ACCOUNTS_URL}.getJWT` as const satisfies string;

/**
 * Gigya API for authentication
 */
export const GigyaApi = {
  /**
   * __Description__ : Login to Gigya service. Required to retrieve **login_token**.
   *
   * __Method__ : POST
   *
   * __URLSearchParams__ :
   * - **ApiKey** : "3_4LKbCcMMcvjDm3X89LU4z4mNKYKdl_W0oD9w-Jvih21WqgJKtFZAnb9YdUgWT9_a"
   * - **loginID** : (user login)
   * - **password** : (user password)
   *
   * __Response Model__ : LoginInfo
   * (**login_token** stored in LoginInfo.SessionInfo.cookieValue)
   */
  LOGIN_URL,

  /**
   * __Description__ : Get account info. Required to retrieve **personId**.
   *
   * __Method__ : POST
   *
   * __URLSearchParams__ :
   * - **ApiKey** : "3_4LKbCcMMcvjDm3X89LU4z4mNKYKdl_W0oD9w-Jvih21WqgJKtFZAnb9YdUgWT9_a"
   * - **login_token** : (Gigya token retrieved with login API)
   *
   * __Response Model__ : AccountInfo
   * (**personId** stored in AccountInfo.Data.personId)
   */
  GET_ACCOUNT_INFO_URL,

  /**
   * __Description__ : Get JWT. Required to retrieve **id_token** to use Kamereon API.
   *
   * __Method__ : POST
   *
   * __URLSearchParams__ :
   * - **ApiKey** : "3_4LKbCcMMcvjDm3X89LU4z4mNKYKdl_W0oD9w-Jvih21WqgJKtFZAnb9YdUgWT9_a"
   * - **login_token** : (Gigya token retrieved with login API)
   * - **fields** : "data.personId,data.gigyaDataCenter"
   * - **expiration** : (expiration of JWT in millisecond)
   *
   * __Response Model__ : Token
   * (**id_token** stored in Token.id_token)
   */
  GET_JWT_URL
};
