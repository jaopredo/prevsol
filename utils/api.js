import APICONFIG from '~/config/api'

export async function makeApiCall(route, service, updater) {
    const { data } = await service.getAll({route, page: 1, pageSize: APICONFIG.entries[route]})
    updater(data)
}
