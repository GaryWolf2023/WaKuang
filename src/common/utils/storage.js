const storage = window.localStorage

const checkStorageItem = (key) => {
    const item = storage.getItem(key)
    return item !== undefined;
}

const getStorageItem = (key) => {
    const item = storage.getItem(key)
    try {
        return JSON.parse(item)
    } catch (err) {
        return item
    }
}

const setStorageItem = (key, value) => {
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

const removeStorageItem = (key) => {
    return storage.removeItem(key)
}

export {
    setStorageItem,
    getStorageItem,
    removeStorageItem
}