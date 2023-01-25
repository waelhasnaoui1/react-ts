import axios from "axios"
import { ForgotPasswordModel } from './../model/forgotPasswordModel';

export const forgotPasswordService = async (data:ForgotPasswordModel)=> {
    await axios.post(
        "http://retailer-handler-nlb-dev-2bc7485b42754698.elb.us-east-1.amazonaws.com:5003/forget_password",
        data
    )
}