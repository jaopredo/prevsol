import APICONFIG from "@/config/api";

import AxiosAdapter from "@/api/infra/adpters/AxiosAdapter";

import DataBoardApiDataSource from "@/api/infra/sources/DataBoardApiDataSource";

import DataBoardService from "@/api/services/DataBoardService";

const applicationCoreInit = (provide) => {
    const httpClient = new AxiosAdapter(APICONFIG.url);

    // Datasources
    const databoardApiDataSource= new DataBoardApiDataSource(httpClient)

    // Services
    const databoardService = new DataBoardService(databoardApiDataSource);

    provide('httpClient', httpClient);
    provide('databoardService', databoardService);
}

export default applicationCoreInit