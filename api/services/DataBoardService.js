
export default class GenericService {

    #apiDataSource;

	constructor (apiDataSource) {
        this.#apiDataSource = apiDataSource;
	}

    setRoute(route){
		this.#apiDataSource.setRoute(route)
        return this
	}

	async getAll(page, pageSize, filters = {}) {
		return await this.#apiDataSource.getAll(page, pageSize, filters)
		.catch((e) => {
			return Promise.reject(e);
		})
	}

    async get(id) {
		return await this.#apiDataSource.get(id);
	}
}