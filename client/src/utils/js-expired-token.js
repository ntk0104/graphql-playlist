const isTokenExpired = true;
let token = 'Current token'; // thường lưu trong local storage

const refreshToken = (url) => {
  console.log('Refresh token url: ', url);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('\n');
      resolve('Yes, this is a new token 😎');
    }, 3000);
  });
};

// closure: to save the refreshTokenRequest
let refreshTokenRequest = null;
const requestApi = async (url) => {
  if (isTokenExpired) {
    console.log('requestApi: Ooops ... token expired: ', url, token);

    refreshTokenRequest = refreshTokenRequest
      ? refreshTokenRequest
      : refreshToken(url);
    // 1 --> null --> refreshToken
    // 2 --> refreshToken --> refreshToken
    // 3 --> refreshToken --> refreshToken

    const newToken = await refreshTokenRequest;
    // reset token request for the next expiration
    refreshTokenRequest = null;

    token = newToken; // thường update token trong localStorage
    console.log('requestApi: Fetch data with new token: ', url, token);
    return;
  }

  console.log('Fetch data: ', url, token);
};

// ---------------
// MAIN LOGIC
// ---------------
const main = () => {
  requestApi('/me');
  requestApi('/shops');
  requestApi('/products');
};
main();





