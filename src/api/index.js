import axios from "axios"

const apiEndPoint = "http://localhost:5000/users"

export const fetchUsers = async () => await axios.get(apiEndPoint);

export const createUsers = async (user) => await axios.post(apiEndPoint, user)