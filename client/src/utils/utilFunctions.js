export const parseErrors = (errObj) => {
  const {
    response: { data, status },
  } = errObj;
  try {
    if (status == 400) {
      return {
        success: false,
        message: data.message,
        statusCode: status,
      };
    }
    if (status == 500) {
      return {
        success: false,
        message: data.message,
        statusCode: status,
      };
    } else {
      return {
        success: false,
        message:
          "Check CREATE_API response from backend and find the status code of Error",
        statusCode: status,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Network error CREATE_API  ${errObj}`,
      statusCode: status,
    };
  }
};
