export const getError = (error: any) => {
  if (error.response) {
    console.error({
      'Response Status:': error.response.status,
      'Response Data:': error.response.data,
      'Response Headers:': error.response.headers,
    });
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error during request setup:', error.message);
  }
}
