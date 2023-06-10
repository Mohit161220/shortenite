const express = require('express');
const fetch = require('node-fetch');
const api_key = '2c12b353feb6932c2d3e0e884c82e820';
const getIpAddressDetailsIpStack = async function(ip){
    let url = `http://api.ipstack.com/${ip}?access_key=${api_key}`;
    fetch(url).then(response => response.json()).then(json => {
        console.log(json);
    }).catch(err => console.log(err));
}
module.exports = getIpAddressDetailsIpStack;