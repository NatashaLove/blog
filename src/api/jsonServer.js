//import axios and make a preconfigured version of axios:
import axios from 'axios';

export default axios.create({
//the only option that we want to configure on this axios instance-baseURL:
    baseURL: ' http://4131c3f0.ngrok.io' // taking baseURL from cmd terminal (w/tunnel)-but have to update it every few hours..
});