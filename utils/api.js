export async function makeApiCall(route, service, updater) {
    const { data } = await service.getAll(route, 1, 10)
    updater(data)
}
