import axios from "axios";

export const AxiosGet = async (method: string, url: string, data: any = null) => {
    return (
        await axios({
            method: method,
            url: `${url}/${data !== null ? data : ''}`
        })
            .then(response => {
                return response.data.data;
            })
            .catch(error => {
                return error;
            })
    )
}