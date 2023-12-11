import axios from "axios"
// import { useLazyFetch } from 'nuxt'

export default class AxiosAdapter {
	#baseUrl;
    constructor (baseUrl){
        this.#baseUrl = baseUrl;
    }

    async get(url, params = null) {
		const response = await axios.get(`${this.#baseUrl}/${url}`, {params});
		return response.data;
	}

	async post(url, body, config=undefined) {
		const response = await axios.post(`${this.#baseUrl}/${url}`, body, { onUploadProgress: config?.onUploadProgress });
		return response.data;
	}

	async put(url, body) {
		const response = await axios.post(`${this.#baseUrl}/${url}`, {
			...body,
			_method: 'PUT'
		});
		return response.data;
	}

	async delete(url) {
		const response = await axios.delete(`${this.#baseUrl}/${url}`);
		return response.data;
	}

	async patch(url, body) {
		const response = await axios.post(`${this.#baseUrl}/${url}`, {
			...body,
			_method: 'PATCH'
		});
		return response.data;
	}

	setBaseUrl(baseUrl) {
		this.#baseUrl = baseUrl;
		axios.defaults.baseURL = baseUrl;
	}

	setToken(token){
		axios.defaults.headers.common['Authorization'] = token;
	}
}