import axios from "axios";
import { useMutation, useQuery } from "react-query";
// import { UserInfo } from "../types/userinfo";

const login = async ({
    email,
    password
}) => {
    // const data = await axios.post("/api/login", {email, password});
    const data = {};
    return data;
}

export const useLogin = () => {
    const { isLoading, mutateAsync } = useMutation(login);
    return { isLoggedIn: isLoading, login: mutateAsync };
}

const logout = async () => {
    const { data } = await axios.post("/api/logout");
    return data;
}

export const useLogout = () => {
    const { isLoading, mutateAsync } = useMutation(logout);
    return { isLoggedOut: isLoading, logout: mutateAsync };
}

const register = async (userInfo) => {
    const { data } = await axios.post("/api/register", userInfo);
    return data;
}

export const useRegister = () => {
    const { isLoading, mutateAsync } = useMutation(register);
    return { isRegistering: isLoading, register: mutateAsync };
}

const fetchUserInfo = async (key) => {
    const { data } = await axios.get("/api/user-info", {params: {key}});
    return data;
}

export const useUserInfo = (key) => {
    return useQuery(["user-info", key], () => fetchUserInfo(key), {
        enabled: !!key
    });
}