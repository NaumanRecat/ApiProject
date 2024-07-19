import AsyncStorage from "@react-native-async-storage/async-storage";



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

//   get

export const myFetchGetRequest = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const response = await fetch('https://django-blog-cyfp.vercel.app/api/blogposts', {
        method: 'GET',
        headers: {
            'Authorization': `Token ${userToken}`,
            'Content-Type': 'application/json'
        }
    });
    const resJson = await response.json();
    return resJson;
  };

  // Delete

  export const myFetchDeleteRequest = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    });
    return;
  }

  // AddData

  export const myFetchAddData = async (formData) => {
    const userToken = await AsyncStorage.getItem('userToken');
    const response = await fetch('https://django-blog-cyfp.vercel.app/api/blogposts', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Token ${userToken}`,
            // Note: 'Content-Type' should not be set here for multipart/form-data
        },
    });
    const resJson = await response.json();
    return resJson;
  };
  
    