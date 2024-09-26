import axios from "axios";

const API_URL = "http://127.0.0.1:8080/users";

//add user 

export const addUser = async(data)=>{
    try{
        return await axios.post(API_URL,data);
    }catch(error){
        console.log("error while adding user",error.message);
    }
}

export const getUser = async() =>{
    try{
        return await axios.get(API_URL)
    }
    catch(error){
        console.log("error while getting user",error.message);
    }
}

// delete user

export const deleteUser = async(id) =>{

    try{
        return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log("error while deleting user",error.message);
    }
}

// export const viewUser = async(id) =>{

//     try{
//         return await axios.get(`${API_URL}/${id}`)
//     }catch(error){
//         console.log("error while deleting user",error.message);
//     }
// }

// edit singal user

export const getSingleUser = async(data) =>{
    try{
        return await axios.get(`${API_URL}/${data}`)
    }catch(error){
        console.log("error while getting single user",error.message);
    }
}

export const editUser = async(data,id) =>{
    try{
        return await axios.put(`${API_URL}/${id}`,data)
    }catch(error){
        console.log("error while Edit user",error.message);
    }
}

export const loginUser = async (email, password)=>{
    try{

        const response = await axios.get(API_URL)
        const users = response.data;
    
        // find user with matching username and password
        const user = users.find(u=>u.email === email && u.password === password )

        if(user){
            return {success:true,user}
        }else{
            return {success:false,message:"Invalid username or password"}
        }
    }catch(error){
        console.log("error while login user",error.message);
        return {success:false,message:"an error occured during login"}
    }
}