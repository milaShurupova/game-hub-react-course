import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7aeec06543924d479038ff1533b4daa4"
  }
})