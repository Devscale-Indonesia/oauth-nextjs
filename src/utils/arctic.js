import { Google } from "arctic";

const clientId = "";
const clientSecret = "";
const redirectURI = "";

export const google = new Google(clientId, clientSecret, redirectURI);
