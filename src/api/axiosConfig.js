import axios from "axios";

export default axios.create({
	baseURL: 'https://199a-61-105-29-161.ngrok-free.app/',
	headers: {"ngrok-skip-browser-warning": true},
});