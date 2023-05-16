import { multipartInstance }from '../api/apiConfig'

const roomRegister = async (data) => {
    console.log("data!!!!!", data)
    const response = await multipartInstance.post('/room', data)
    console.log("____",response)
    return response.data
}

export {roomRegister}