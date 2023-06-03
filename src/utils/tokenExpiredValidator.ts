function checkTokenExpired(data:string) {
    if (data === "Token expired") {
        window.localStorage.removeItem('token');
        /* window.location.href = '/'; */
        return true;
    }
    return false;
}

export {
    checkTokenExpired
}