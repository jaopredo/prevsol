
export default class GenericService {

    #apiDataSource;

	constructor (apiDataSource) {
        this.#apiDataSource = apiDataSource;
	}

	async getAll(route, page, pageSize, filters = {}) {
		return await this.#apiDataSource.getAll(route, page, pageSize, filters)
		.catch((e) => {
			return Promise.reject(e);
		})
	}

    async get(route, id) {
		return await this.#apiDataSource.get(route, id);
	}
}