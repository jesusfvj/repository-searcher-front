function checkTokenExpired(data:string) {
    if (data === "Token expired") {
        window.localStorage.removeItem('token');
        return true;
    }
    return false;
}

export {
    checkTokenExpired
}