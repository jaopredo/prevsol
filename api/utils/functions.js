export function objectCamelToSnakeCase(obj) {
    let newObject = {};
    for (const [key, value] of Object.entries(obj)) {
        newObject[camelToSnakeCase(key)] = value;
    }
    return newObject;
}