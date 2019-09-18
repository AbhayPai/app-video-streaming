import Cookie from "UtilitiesPath/Cookie";

export function setCookie() {
    return Cookie.setCookie.apply(this, arguments);
}

export function getCookie() {
    return Cookie.getCookie.apply(this, arguments);
}

export function removeCookie() {
    return Cookie.removeCookie.apply(this, arguments);
}
