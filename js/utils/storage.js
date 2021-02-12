const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    SaveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    SaveToStorage(userKey, user);
}

function SaveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if(!value) {
        return [];
    }

    return JSON.parse(value);
}