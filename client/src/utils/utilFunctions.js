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
        success: false,
        message: errObj.response.data,
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

export const parseSuccess = (res) => {
  const {
    data: { message, success, data },
    status,
  } = res;
  try {
    if (status == 200) {
      return {
        success,
        message,
        data,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Network error  ${error}`,
      statusCode: status,
    };
  }
};
