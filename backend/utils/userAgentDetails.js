const parser = require('ua-parser-js');
const getIpAddressDetailsIpData = require('./ipAddressDetailsIpData');

const getUserAgentDetails = async function details(userAgent){
    try {
        const parsedUserAgent = await parser(userAgent);
        let returnObject = {
            browserName : parsedUserAgent.browser.name,
            browserVersion : parsedUserAgent.browser.version,
            osName : parsedUserAgent.os.name,
            osVersion : parsedUserAgent.os.version
        }
        return returnObject;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = getUserAgentDetails;