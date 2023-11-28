export function objectCamelToSnakeCase(obj) {
    let newObject = {};
    for (const [key, value] of Object.entries(obj)) {
        newObject[camelToSnakeCase(key)] = value;
    }
    return newObject;
}

export function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}