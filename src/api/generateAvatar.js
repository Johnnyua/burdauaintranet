import axios from "axios";

export async function generateAvatar(index) {
  const url = `http://localhost:8080/randomusers/assets/avatars/male/${index}.jpg`;
  try {
    const response = await axios.get(url);  
    return response;
  } catch (error) {
    console.error(error.message); 
  }
}