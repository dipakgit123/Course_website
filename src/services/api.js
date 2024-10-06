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


//WHY TO CHOOSE US

export const fetchCards1 = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8080/cards');
    if (!response.ok) {
      throw new Error('Failed to fetch cards data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

    //OUR KEY FEATURES
    export const fetchFeaturesData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/features');
          if (!response.ok) {
            throw new Error('Failed to fetch features data');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching features data:', error);
          return null;
        }
      };

    //CORPORATE TRAINING
    export const fetchCorporateTrainingData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8080/corporateTraining');
          if (!response.ok) {
            throw new Error('Failed to fetch corporate training data');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching corporate training data:', error);
          return null;
        }
      };

  
  //LOGO 
    export const fetchLogos = async () => {
    const response = await fetch(' http://127.0.0.1:8080/logos');
    if (!response.ok) {
      throw new Error('Failed to fetch logos');
    }
    return response.json();
  };
  
  export const fetchCards = async () => {
    const response = await fetch(' http://127.0.0.1:8080/cards1');
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }
    return response.json();
  };

  //VISION AND MISSION
export const fetchVisionMissionData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8080/visionMission');
    if (!response.ok) {
      throw new Error('Failed to fetch vision and mission data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vision and mission data:', error);
    return null;
  }
};

  
