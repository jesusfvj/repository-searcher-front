export const retrieveAccessToken = (string:string) => {
    const regex = /access_token=([^&]+)/;
    const match = string.match(regex);

    if (match && match[1]) {
        const accessToken = match[1];
        return accessToken;
    } else {
       return "Access token not found.";
    }
}