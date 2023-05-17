import { instance, tokenInstance } from '../api/apiConfig'

const getMainList = async () => {
    const response = await instance.get('/main')

    return response.data.data
}

const getMainListUser = async () => {
    const response = await tokenInstance.get('/user/main')

    return response.data.data
}

const getMainListKeyword = async (keywordQueryParams) => {
    const params = keywordQueryParams;
    const response = await instance.get('/main/keyword', {params})
    return response.data.data
}

const getMainListUserKeyword = async (keywordQueryParams) => {
    const params = keywordQueryParams;
    const response = await tokenInstance.get('/user/main/keyword', {params})
    return response.data.data
}

const getMainListUserLike = async () => {
    const response = await tokenInstance.get('/room/like')
    return response.data.data
}




export {getMainList, getMainListKeyword, getMainListUser, getMainListUserKeyword, getMainListUserLike}