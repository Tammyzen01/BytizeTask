
import apiConfig from "./config";
import _ from "lodash";
export const getApi = async (action, headers = {}) => {
  
  try {
   
    const userToken = '12345';
    console.log('UserToker:',userToken);
    let requestHeaders = _.pickBy(
      {
        ...(userToken
          ? {
              Authorization: `bearer ${userToken}`
            }
          : {
              "Client-ID": apiConfig.clientId
            }),
        ...headers,
        ...{
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      },
      item => !_.isEmpty(item)
    );
    console.log(`getApi url: ${apiConfig.url}${action}`);
    let response = await fetch(`${apiConfig.url}${action}`, {
      method: "GET",
      headers: requestHeaders
    });
    // console.log(response,'text phone number.........');
    if (response.ok) {
      let responseJson = await response.json();
      return { result: responseJson, isSuccess: true, message: "" };
    }
    return { result: null, isSuccess: false, message: response.statusText };
  
  } 
  catch (error) {
    console.error(error);
    return { result: null, isSuccess: false, message: error };
  
  }

}
export const postApi = async (action, headers = {}, body = {}) => {
  try {
     console.log(apiConfig);
    console.log(`body: ${body}`);
    const userToken = '123456';
    let requestHeaders = _.pickBy(
      {
        ...(userToken
          ? {
              Authorization: `bearer ${userToken}`
            }
          : {
              "Client-ID": apiConfig.clientId
            }),
        ...headers,
        ...{
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      },
      item => !_.isEmpty(item)
    );
    console.log(`postApi url: ${apiConfig.url}${action}`);
    let response = await fetch(`${apiConfig.url}${action}`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(body)
    });

    console.log("response",response);

    let responseJson = await response.json();
    console.log("responseJson",responseJson);
     if (response.ok) {
      return { result: responseJson, isSuccess: true, message: "" };
    }
    return { result: null, isSuccess: false, message: "" };
  
  } catch (error) {
    console.error(error);
    return { result: null, isSuccess: false, message: error };
  }
};