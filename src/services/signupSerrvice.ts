import { SignUpModel } from './../model/singUpModel';
import axios from "axios";

export const signUpService = async (data:SignUpModel) => {
    await axios.post('http://retailer-handler-nlb-dev-2bc7485b42754698.elb.us-east-1.amazonaws.com:5003/sign_up',
        data
    )

}