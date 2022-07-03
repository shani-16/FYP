import WebStorage from "./webStorage";

export const isTokenSaved = () => WebStorage.getAuthToken();

export const parseErrors = (errObj) => {
  const {
    data: { message, success },
    status,
  } = errObj.response;
  try {
    if (status == 400) {
      return {
        success,
        message,
        statusCode: status,
      };
    }
    if (status == 500) {
      return {
        success,
        message,
        statusCode: status,
      };
    } else {
      return {
        success,
        message:
          "Check CREATE_API response from backend and find the status code of Error",
        statusCode: status,
      };
    }
  } catch (error) {
    return {
      success,
      message: `Network error CREATE_API  ${errObj}`,
      statusCode: status,
    };
  }
};
