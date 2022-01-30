import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setUser = (user)=>{
    const user_obj = JSON.stringify(user);
    cookies.set("user",user_obj);
}

export const removeUser = ()=>{

}

export const getUser = ()=>{
    if(cookies.get("user")){
        return cookies.get("user");
    }
    else
        return null;
}

export const logOut = ()=>{
    cookies.remove('authToken', { path: '/' });
    cookies.remove('user', { path: '/' });
    window.location = '/signin';
}