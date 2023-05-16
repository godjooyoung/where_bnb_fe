import axios from "axios";
import api from '../api/apiConfig'

const getNotice = async (id) => {
    const response = await api.get(`/room/like/${id}`)
    return response.data
}

export {getNotice}