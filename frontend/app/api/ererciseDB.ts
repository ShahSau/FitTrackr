import axios from "axios";
const key = '67f89913b9mshfd8a90c757830bep16156ajsn13a3c83bd33f'
const baseUrl = 'exercisedb.p.rapidapi.com'

const apiCall = async (url: any, params: any) =>{
    try {
        const options = {
            method: 'GET',
            url: url,
            params: params,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': baseUrl
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getExercisesByBodyPart = async (bodyPart:string) => {
    const data = await apiCall(`https://${baseUrl}/exercises/bodyPart/${bodyPart}`, {})
    return data
}

export const getExerciseByTarget = async (target:string) => {
    const data = await apiCall(`https://${baseUrl}/exercises/target/${target}`, {})
    return data
}