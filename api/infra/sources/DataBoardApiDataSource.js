
export default class GenericApiDataSource {
    #httpClient

    constructor (httpClient) {
        this.#httpClient = httpClient;
	}

    // ---| » (GetALL)-responsavel por pegar todos os valores registrados na db da api
    async getAll({route, page, pageSize, filters={}, foreignKeys}){
        let result,data=[];
        try{
            result=await this.#httpClient.get(
                route,
                {page, limit: pageSize, filters, foreignKeys}
            )
            //--| » if (result!==error){runtodown()}
            
            if (!foreignKeys) {
                return {data: result.data, metadata: result.meta}
            } else {
                return data
            }
        }catch(err){
            return Promise.reject(err);
        }

    }

    // ---| » (Get)-responsavel por pegar valores em especifico ou todos na db da api
    async get(route, id) {
        let result;
        try{
            result=await this.#httpClient.get(`${route}/${id}`)
            
            //--| » if (result!==error){runtodown()}        
            return result.data
        }catch(err){
            return Promise.reject(err);
        }
    }

    // ---| > (Post)
    async post(route, data) {
        return await this.#httpClient.post(`${route}`, data).catch(err => Promise.reject(err))
    }
}