import axios from "axios";

export default axios.create({
	baseURL: 'https://7051-61-105-29-161.ngrok-free.app/',
	headers: {"ngrok-skip-browser-warning": true},
});