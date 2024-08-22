import FacebookLogin from 'react-facebook-login';

function FacebookSignIn() {
  const responseFacebook = (response) => {
    console.log('Login Success: ', response);
    // Send token and user info to your backend
  };

  return (
    <FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default FacebookSignIn
