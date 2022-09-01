import herokuappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/auth.data";

async function getAuthToken() {
    const response = await herokuappAPI.auth_post(data.VALID_LOGIN);

    let authToken = response.data.token;
    return authToken;
}

export default getAuthToken;