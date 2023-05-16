import axios from "axios";
import api from '../api/apiConfig'

const getNotice = async () => {
    const response = await api.get('/notice')
    return response.data
}

export {getNotice}