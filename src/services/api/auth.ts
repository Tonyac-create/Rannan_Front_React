import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function signIn(body: any){
    try{
        const response = await api.post('/auth/register', body);
        const { token, refreshToken, user } = response.data
        if (token !== undefined && refreshToken !== undefined) {
            localStorage.setItem("authToken", token)
            localStorage.setItem("authRefreshToken", refreshToken)
            localStorage.setItem("user.avatar", user.avatar_id)
            localStorage.setItem("user.nickname", user.nickname)
            localStorage.setItem("user.id", user.id)
            localStorage.setItem("user.email", user.email)
        }
        return ({
            status: true,
            data: response.data
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function logIn(body: any){
    try{
        const response = await api.post('/auth/login', body);
        const { token, refreshToken, user } = response.data
        if (token !== undefined && refreshToken !== undefined) {
            localStorage.setItem("authToken", token)
            localStorage.setItem("authRefreshToken", refreshToken)
            localStorage.setItem("user.avatar", user.avatar_id)
            localStorage.setItem("user.nickname", user.nickname)
            localStorage.setItem("user.id", user.id)
            localStorage.setItem("user.email", user.email)
        }
        return ({
            status: true,
            data: response.data
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function refreshToken(){
    try{
        const response = await api.get('/api/auth/refreshToken');
        return ({
            status: true,
            data: response
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}

export async function logOut(){
    try{
        const response = await api.put('/api/auth/disconnect');
        localStorage.removeItem("authToken")
        localStorage.removeItem("authRefreshToken")
        localStorage.removeItem("user.nickname")
        localStorage.removeItem("user.avatar")
        localStorage.removeItem("user.id")
        localStorage.removeItem("user.email")
        return ({
            status: true,
            data: response
        })
    }
    catch(error){
        return ({
            status: false,
            data: error
        })
    }
}