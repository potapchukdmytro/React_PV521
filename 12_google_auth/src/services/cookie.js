export function setCookie(key, value, expires = null) {
    if(expires) {
        document.cookie = `${key}=${value}; path=/; expires=${new Date(expires * 1000).toUTCString()}`;
    } else {
        document.cookie = `${key}=${value}; path=/`;
    }
}

export function removeCookie(key) {
    document.cookie = `${key}=; path=/; expires=${new Date(0).toUTCString()}`;
}

export function getCookie(key) {
    return document.cookie.split('; ').find(row => row.startsWith(`${key}=`))?.split('=')[1];
}