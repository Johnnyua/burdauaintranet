import axios from "axios";

export async function generateAvatar(param) {
  const url = "https://xsgames.co/randomusers/avatar.php";
  try {
    const response = await axios.get(url, {
      params: {
        g: param.gender,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
