import axios from "axios";

export const API_URL = "https://www.omdbapi.com/?apikey=bd0ee8e8";


export const doApiGet = async (_url) => {
  try {
    let resp = await axios.get(_url)
    return resp;
  }
  catch (err) {
    throw err;
  }
}
