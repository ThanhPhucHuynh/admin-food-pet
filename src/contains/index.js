import Cookies from 'js-cookie';
export const HOST = 'http://localhost:3000/';

export const getCookies = () => Cookies.get('userID');
export const setCookies = (value) => Cookies.set('userID', value, { expires: 7 });
