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
        return response.data
    } catch (error) {
        console.log(error)
    }

}

// get all meals
export const getAllMeals = async ({email}:{email:string}) => {
    const url = `http://192.168.2.76:8080/api/nutrition/all`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {email: email}
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//add food
export const addFood = async ({email,name, quantity,description ,meal}:{email:string, name:string, quantity:number, description:string, meal:string}) =>{
    const url = `http://192.168.2.76:8080/api/nutrition/${meal}`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                name: name,
                quantity: quantity,
                description: description,
                date: new Date()
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


//add todays nutrition
export const addNutrition = async ({email,calories,fat,protein,sodium}:{email:string,calories:number,fat:number,protein:number,sodium:number}) => {
    const url = `http://192.168.2.76:8080/api/nutrition/add`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                calories: calories,
                fat: fat,
                protein: protein,
                sodium: sodium,
                date: new Date()
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}



//crete workout
export const createWorkout = async ({email,numberofsets,duration}:{email:string,numberofsets:number, duration:number}) => {
    const url = `http://192.168.2.76:8080/api/workouts/create`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                numberofsets: numberofsets,
                duration: duration,
                date: new Date()
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//create calories burnt
export const createCaloriesBurnt = async ({email,calories}:{email:string,calories:number}) => {
    const url = `http://192.168.2.76:8080/api/workouts/calories`
    try {
        const options = {
            method: 'POST',
            url: url,
            data: {
                email: email,
                calories: calories,
                date: new Date()
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}