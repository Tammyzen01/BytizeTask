import {getApi,postApi} from "./api";
import { SHOW } from "./constants"

//APi
export const getList = async () => getApi(`${SHOW}?q=golden%20girls`);