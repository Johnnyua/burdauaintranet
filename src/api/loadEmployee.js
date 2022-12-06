import axios from "axios";

export async function loadEmployee() {
  
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await axios.get(url);
    return response;  
  } catch (error) {
      console.log(error.message);  
  }
    return false;
}
