import { instance } from '../api/apiConfig'

const getMainList = async () => {
    const response = await instance.get('/main')
    console.log("######",response)
    return response.data.data
}

export {getMainList}