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

export function getUserName() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function clearStorage() {
    localStorage.clear();
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