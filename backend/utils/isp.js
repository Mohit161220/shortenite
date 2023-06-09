const {IpregistryClient} = require('@ipregistry/client');
const client = new IpregistryClient('1dgi1sqx0fgcxq8k');
const isp = async function lookupIpInfo(ip){
    let returnObject;
    try {
        if(!ip) ip = '112.196.174.148';
        const {response} = await client.lookup(ip);
        console.log(response);
        returnObject = {
            type : response?.company?.type,
            isp : response?.connection?.organization,
            timezone : {
                name: response?.time_zone?.name,
                offset: response?.time_zone?.offset,
                id: response?.time_zone?.id,
                abbreviation: response?.time_zone?.abbreviation
            },
            location : {
                name: response?.location?.region?.name,
                city: response?.location?.city,
                postal: response?.location?.postal,
                country : {
                    name: response?.location?.country?.name,
                    code: response?.location?.country?.code
                },
                continent : {
                    code: response?.location?.continent?.code,
                    name: response?.location?.continent?.name,
                }
            }
        }
        return returnObject;
    } catch(error) {
        console.log(error);
        return;
    }
}

module.exports = isp;