import axios from "axios";

export async function getPosts(page = 1, addedParam = {}) {
  let param = {
    country: "us",
    category: "business",
    page:page,
    pageSize: 5,
    apiKey: "ad3124987f88443ea4bf7df20ac7cc98", // enter your API key
  };

  param = Object.assign(param, addedParam);

  const url = "https://newsapi.org/v2/top-headlines";
  const response = await axios.get(url, {
      params: param,
    });
    return response;
}
