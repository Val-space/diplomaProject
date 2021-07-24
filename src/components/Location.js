import React, { useContext, useState } from "react";
import { Country, City } from "country-state-city";
import { LocationContext } from "./Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Location({ ChangeLocation, changeCity }) {
  const { location } = useContext(LocationContext);

  const [isHidden, setIsHidden] = useState(true);
  let selectedCountry = Country.getAllCountries().filter(
    (country) => country.name === location.country
  );
  return (
    <>
    <div className={"menu-icon menu-location__city"}>
    <FontAwesomeIcon
        onClick={() => setIsHidden(!isHidden)}
        icon={faMapMarkerAlt}
      />
    </div>
      <span className={"menu-location__city--cityname"} >{location.city}</span>
      <div className={ isHidden ? "location-block" : 'location-block active'}>
          <select onChange={(e) => ChangeLocation(e.target.value)}>
            <option>Select your country</option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode.toString()} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <select onChange={(e) => changeCity(e.target.value)}>
            <option value="">Your city</option>
            {selectedCountry[0]
              ? City.getCitiesOfCountry(selectedCountry[0].isoCode).map(
                  (state, id) => (
                    <option key={state.name + id} value={state.name}>
                      {state.name}
                    </option>
                  )
                )
              : ""}
          </select>
      </div>
    </>
  );
}

export default Location;
