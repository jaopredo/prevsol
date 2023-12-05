
export default class GenericService {

    #apiDataSource;

	constructor (apiDataSource) {
        this.#apiDataSource = apiDataSource;
	}

	async getAll(params) {
		return await this.#apiDataSource.getAll(params)
		.catch((e) => {
			return Promise.reject(e);
		})
	}

    async get(route, id) {
		return await this.#apiDataSource.get(route, id);
	}

	async post(route, data) {
		return await this.#apiDataSource.post(route, data).catch((e) => {
			return Promise.reject(e);
		})
	}
}