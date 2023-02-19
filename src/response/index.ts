import axios from "axios";
import { APP_URL } from "../constants";

export const postSalaryRequest = (appendData: string[]) => {
     return axios.post(`${APP_URL}/write`, {
        appendData
    })
}
export const postAddColumnSalaryRequest = (appendData: string[]) => {
     return axios.post(`${APP_URL}/appendColumn`, {
        appendData
    })
}
