import { applicationToApi as getAllToApi } from "../mappers/GetAllMapper";
import { mappers } from '../mappers/unity.js'


export default class GenericApiDataSource {
    #httpClient;
    #resourceUrl;
    #mappers

    constructor (httpClient) {
        this.#httpClient = httpClient;
        this.#mappers=mappers()
	}

    // ---| » (SetROUTE)-responsavel por definir o valor da url (resourceUrl)
    setRoute(route){
        this.#resourceUrl=route
    }
    // ---| » |==============================================================............  





    // ---| » (GetALL)-responsavel por pegar todos os valores registrados na db da api
    async getAll(page, pageSize, filters){
        let result,data=[];
        try{
            result=await this.#httpClient.get(
                this.#resourceUrl,
                getAllToApi({page, pageSize}, filters)
            )

            //--| » if (result!==error){runtodown()}

            result.data.forEach(objects => {
                data.push(this.#mappers.especificMapper(this.#resourceUrl).apiToApplication(objects));
            });
            
            return {data, metadata: result.meta};
        }catch(err){
            return Promise.reject(err);
        }

    }

    // ---| » (Get)-responsavel por pegar valores em especifico ou todos na db da api
    async get(id) {
        let result;
        try{
            result=await this.#httpClient.get(`${this.#resourceUrl}/${id}`)
            
            //--| » if (result!==error){runtodown()}        
            return this.#mappers.especificMapper(this.#resourceUrl).apiToApplication(result.data)
        }catch(err){
            return Promise.reject(err);
        }
    }
}