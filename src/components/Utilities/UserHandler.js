import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setUser = (user)=>{
    if(cookies.get("user")){
        cookies.remove('user', { path: '/' });
    }
    const user_obj = JSON.stringify(user);
    cookies.set("user",user_obj);
}

export const getUser = ()=>{
    if(cookies.get("user")){
        return cookies.get("user");
    }
    else
        return null;
}

export const setAuthCookie = (c)=>{
    cookies.set("authToken",c);
}

export const getAuthCookie = ()=>{
    return cookies.get("authToken");
}

export const logOut = ()=>{
    cookies.remove('authToken', { path: '/' });
    cookies.remove('user', { path: '/' });
    window.location = '/signin';
}