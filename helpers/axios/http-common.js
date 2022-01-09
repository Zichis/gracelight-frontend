import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://gracelight-backend.test/api/`,
  headers: {
    Authorization: "Bearer {token}",
    Accept: "application/json",
  },
});
