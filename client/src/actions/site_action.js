import axios from 'axios';
import {
    SITE_SERVER,
} from '../components/ultils/mise';

import {
    GET_SITE_DATA,
    UPDATE_SITE_DATA,
} from './types';

export function getSiteData(){
    const request = axios.get(`https://shielded-spire-30008.herokuapp.com${SITE_SERVER}/site_data`)
        .then(response => response.data);
    console.log(request);
    return {
        type: GET_SITE_DATA,
        payload: request
    }
}


export function updateSiteData(dataToSubmit){
    const request = axios.post(`https://shielded-spire-30008.herokuapp.com${SITE_SERVER}/site_data`, dataToSubmit)
        .then(response => response.data);
    console.log(request);
    return {
        type: UPDATE_SITE_DATA,
        payload: request
    }
}