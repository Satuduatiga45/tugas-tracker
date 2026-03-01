import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/tugas",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
