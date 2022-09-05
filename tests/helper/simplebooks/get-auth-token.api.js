import simplebooksAPI from "$root/pages/simplebooks.api";
import * as data from "$root/data/sim_auth.data";

async function getUserToken() {
    const response = await simplebooksAPI.auth_post(data.VALID_AUTH);
    let userId = response.data.access_token;

    return userId;
}

export default getUserToken;