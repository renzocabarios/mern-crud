import axios from "axios";

export const BASE_URL = "http://localhost:9000/api/";

export function get(uri) {
  return axios.get(`${BASE_URL}${uri}`);
}

export function post(uri, body) {
  return axios.post(`${BASE_URL}${uri}`, body);
}

export function patch(uri, body) {
  return axios.patch(`${BASE_URL}${uri}`, body);
}

export function deleteById(uri) {
  return axios.delete(`${BASE_URL}${uri}`);
}
