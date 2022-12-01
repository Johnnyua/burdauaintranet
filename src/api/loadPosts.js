import axios from "axios";

export async function getPosts(page = 1) {
  const param = {
    country: "us",
    category: "business",
    page:page,
    pageSize: 5,
    apiKey: "ad3124987f88443ea4bf7df20ac7cc98",
  };

  const url = "https://newsapi.org/v2/top-headlines";
  const response = await axios.get(url, {
      params: param,
    });
  console.log(response);
    return response;
}
