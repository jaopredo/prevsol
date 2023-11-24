import APICONFIG from "@/config/api";

import AxiosAdapter from "@/api/infra/adpters/AxiosAdapter";

import DataBoardApiDataSource from "@/api/infra/sources/DataBoardApiDataSource";

import DataBoardService from "@/api/services/DataBoardService";

const applicationCoreInit = () => {
    const httpClient = new AxiosAdapter(APICONFIG.url);

    // Datasources
    const databoardApiDataSource= new DataBoardApiDataSource(httpClient)

    // Services
    const databoardService = new DataBoardService(databoardApiDataSource);

    return databoardService
}

export default applicationCoreInit