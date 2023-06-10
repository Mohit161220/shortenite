const express = require('express');
const { lookup } = require('geoip-lite');

const getIpAddressDetailsGeoIp = async function run(ip) {
    let ans = await lookup(ip);
    console.log(ans);
    return ans;
}

module.exports = getIpAddressDetailsGeoIp;