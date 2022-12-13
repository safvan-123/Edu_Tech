import axios from "axios"

export const API_URL = "https://api.tranxinfotech.in"

export const axiosApi = axios.create({
    baseURL: API_URL,
    // withCredentials: true,
})

axiosApi.interceptors.request.use(
    function (config) {
        // const token = localStorage.getItem("token")

        // if (token) {
        //     config.headers["Authorization"] =
        //         "Bearer " + localStorage.getItem("token")
        // }

        return config
    },
    function (error) { }
)

axiosApi.interceptors.response.use(
    response => {
        return response
    },
    err => {
        // if (err.response && err.response.status && err.response.status == 401) {
        //   localstorege.clear("babyday_token")
        //   window.location.reload(false)
        // }
        // if (err.response && err.response.status && err.response.status == 500) {
        //   window.location.reload(false)
        // }
        return err.response
    }
)

export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function ApiPut(url, data, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function patch(url, data, config = {}) {
    return axiosApi
        .patch(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function del(url, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then(response => response.data)
}