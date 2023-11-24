import { applicationToApi as getAllToApi } from "../mappers/GetAllMapper";
import { mappers } from '../mappers/unity.js'


export default class GenericApiDataSource {
    #httpClient
    #mappers

    constructor (httpClient) {
        this.#httpClient = httpClient;
        this.#mappers=mappers()
	}

    // ---| » (GetALL)-responsavel por pegar todos os valores registrados na db da api
    async getAll(route, page, pageSize, filters){
        let result,data=[];
        try{
            result=await this.#httpClient.get(
                route,
                getAllToApi({page, pageSize}, filters)
            )
            //--| » if (result!==error){runtodown()}

            result.data.forEach(objects => {
                data.push(this.#mappers.especificMapper(route).apiToApplication(objects));
            });
            
            return {data, metadata: result.meta};
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
            return this.#mappers.especificMapper(route).apiToApplication(result.data)
        }catch(err){
            return Promise.reject(err);
        }
    }
}