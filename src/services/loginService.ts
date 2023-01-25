import axios from "axios"
import { LoginModel } from './../model/loginModel';


export const loginService = async (data:LoginModel) => {
    await axios.post(
        "http://retailer-handler-nlb-dev-2bc7485b42754698.elb.us-east-1.amazonaws.com:5003/sign_in",
        data
        )
}