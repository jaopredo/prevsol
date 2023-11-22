
export default class GenericService {

    #userApiDataSource;

	constructor (userApiDataSource) {
        this.#userApiDataSource = userApiDataSource;
	}

    setRoute(route){
		this.#userApiDataSource.setRoute(route)
        return this
	}

	async getAll(page, pageSize, filters = {}) {
		return await this.#userApiDataSource.getAll(page, pageSize, filters)
		.catch((e) => {
			return Promise.reject(e);
		})
	}

	setRoute(route){
		this.#userApiDataSource.setRoute(route)
	}

    async get(id) {
		return await this.#userApiDataSource.get(id);
	}
}