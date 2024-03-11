const storage = window.localStorage

const checkItem = (key) => {
    const item = storage.getItem(key)
    return item !== undefined;
}

const getItem = (key) => {
    const item = storage.getItem(key)
    try {
        return JSON.parse(item)
    } catch (err) {
        console.error(`parse the value of storage into object failed, key——value: '${key}':'${item}' `)
        return item
    }
}

const setItem = (key, value) => {
    try {
        let jsonValue
        if(typeof value === "object") {
            jsonValue = JSON.stringify(value)
        }else {
            jsonValue = String(value)
        }
        storage.setItem(key, jsonValue)
        return true
    } catch (err) {
        return false
    }
}

const removeItem = (key) => {
    return storage.removeItem(key)
}

export {
    setItem,
    getItem,
    removeItem
}