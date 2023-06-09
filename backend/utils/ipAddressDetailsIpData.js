const express = require('express');
const { SuperfaceClient } = require('@superfaceai/one-sdk');
const sdk = new SuperfaceClient({ sdkAuthToken: 'sfs_ba2bf935ba4300bb3d81979c69d17ce35a227ee4ff3cb23868f1fa49117df1c834cf34275ae1abb4b06d4c4a0e6354811bc2d4fdcc818aaee6336268f7b53c5a_21ceafdb' });

const getIpAddressDetailsIpData = async function run(ip) {
    // Load the profile
    const profile = await sdk.getProfile('address/ip-geolocation@1.0.1');
    // Use the profile
    const result = await profile
      .getUseCase('IpGeolocation')
      .perform({
        ipAddress: ip
      }, {
        provider: 'ipdata',
        security: {
          apikey: {
            apikey: 'b80c73b0adc912f512e4ab8a8040a2fd6b06a693a9b662e645a45804'
          }
        }
      });
    // Handle the result
    try {
      const data = result.unwrap();
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
//   run();
module.exports = getIpAddressDetailsIpData;