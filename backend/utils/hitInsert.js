const LINK = require('../models/links');
const HITS = require('../models/hits');
const QR = require('../models/qr');
const USER = require('../models/user');
const getIpAddressDetailsIpData = require('./ipAddressDetailsIpData');
const getIpAddressDetailsGeoIp = require('./ipAddressDetailsGeoIp-lite');
const getIpAddressDetailsIpStack = require('./ipAddressDetailsIpStack');
const getUserAgentDetails = require('./userAgentDetails');

/*
** ---- We are mainly going to use getIpAddressDetailsIpData for the IP DETAILS ----
**
** ---- This code is written using getIpAddressDetailsIpData only. May NOT WORK for other.
**
*/

const insertHit = async function(ip, userAgent, link, key){
    console.log("got inside insertHit");
    console.log(key);
    try {
        let userAgentDetails = await getUserAgentDetails(userAgent);
        let ipAddressDetails = await getIpAddressDetailsIpData(ip);
        let ipInfo = {
            ip : ipAddressDetails.ipAddress,
            country : ipAddressDetails.addressCountry,
            state : ipAddressDetails.addressRegion,
            city : ipAddressDetails.addressLocality,
        }
        let hit = await HITS.create({
            links : link,
            key : key,
            ip : ipInfo.ip,
            country : ipInfo.country,
            state : ipInfo.state,
            city : ipInfo.city,
            browserName : userAgentDetails.browserName,
            browserVersion : userAgentDetails.browserVersion,
            osName : userAgentDetails.osName,
            osVersion : userAgentDetails.osVersion
        });
        let linkToUpdate = await LINK.findById(link);
        linkToUpdate.hitCount += 1;
        linkToUpdate.hits.push(hit);
        linkToUpdate.save();
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = insertHit