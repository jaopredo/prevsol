import {objectCamelToSnakeCase} from "@/api/utils/functions"

export function applicationToApi(pagination, filters) {
    return {
        page: pagination.page,
        page_size: pagination.pageSize,
        ...objectCamelToSnakeCase(filters)
    }
}