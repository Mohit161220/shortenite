import React from "react";

import data from "../../CountryData.json"


const LocationList = () => {
  const countryList = data.map((country) => (<div className="grid grid-cols-6 mt-4" >
    <div className="flex col-span-4">
      <img
        src={`https://flagcdn.com/${country.Code.toLowerCase()}.svg`}
        width="30"
        alt={`country.Name`}
      />
      {country.Name}
    </div>
    <div className="col-span-2"> 5</div>
    </div>
  ));
  return countryList;
};

export default LocationList;
