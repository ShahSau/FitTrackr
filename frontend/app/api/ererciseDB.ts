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

export const getAllexercisesMine = async () => {
    const url = 'http://192.168.2.76:8080/api/exercises'
    try {
        const options = {
            method: 'GET',
            url: url,
        }
        const response = await axios.request(options)
        return response.data        
    } catch (error) {
        console.log(error)
        
    }
}

export const getExerciseMineById = async (id:string) => {
    const url = `http://192.168.2.76:8080/api/exercises/${id}`
    try {
        const options = {
            method: 'GET',
            url: url,
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const signin = async (email:string, password:string) => {
    const url = `http://192.168.2.76:8080/api/users/signin`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                password: password
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const signup = async (email:string, password:string, name:string) => {
    const url = `http://192.168.2.76:8080/api/users`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                password: password,
                name: name
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


// get todays nutrition
export const getNutrition = async ({email}: {email: string}) => {
    const url = `http://192.168.2.76:8080/api/nutrition`
    try {
        const options = {
            method: 'POST',
            url: url,
            data :{email: email}
        }
        const response = await axios.request(options)
        console.log(response.data,"NUTRITION")
        return response.data
    } catch (error) {
        console.log(error)
    }

}