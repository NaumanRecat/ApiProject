// Signup
export const myFetchPostSignupRequest = async (body) => {
    console.log('req sent',body);
      const response = await fetch('https://django-blog-cyfp.vercel.app/api/signup', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resJson = await response.json();
      return resJson;
  };

  // Login
  export const myFetchPostLoginRequest = async (body) => {
    console.log('req sent',body);
      const response = await fetch('https://django-blog-cyfp.vercel.app/api/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resJson = await response.json();
      return resJson;
  };