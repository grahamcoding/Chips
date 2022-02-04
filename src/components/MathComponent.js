import React, { useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCity2, setSelectedCity2] = useState("");
  const [selectedCity3, setSelectedCity3] = useState("");

  const countries = {
    France: [ "Paris", "Marseille", "Lille", "Lyon"],
    Usa: ["New York", "San Francisco", "Austin", "Dallas"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
  };

  const countryList = Object.keys(countries).map(key => ({
    name: key,
  }));

  function handleCountrySelect(e) {
    console.log("Selected country", e.target.value);
    const countrySel = e.target.value;
    const citiesSel = countrySel !== "" ? countries[countrySel] : [];
    setSelectedCountry(countrySel);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleCitySelect(e) {
    console.log("Selected city", e.target.value);
    const citiesSel = e.target.value;
    setSelectedCity(citiesSel);
  }

  function handleCitySelect2(e) {
    console.log("Selected city", e.target.value);
    const citiesSel2 = e.target.value;
    setSelectedCity2(citiesSel2);
  }

  function handleCitySelect3(e) {
    console.log("Selected city", e.target.value);
    const citiesSel3 = e.target.value;
    setSelectedCity3(citiesSel3);
  }

  return (
    <div className="App">
      <h1>Example DropDown Coutries and Cities</h1>

      <div className="Container">
        <select
          name="Countries"
          onChange={e => handleCountrySelect(e)}
          value={selectedCountry}
        >
          <option value="">Select the country</option>
          {countryList.map((country, key) => (
            <option key={key} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          name="Cities"
          onChange={e => handleCitySelect(e)}
          value={selectedCity}
        >
          <option value="">Select the city</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          name="Cities2"
          onChange={e => handleCitySelect2(e)}
          value={selectedCity2}
        >
          <option value="">Select the city</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          name="Cities3"
          onChange={e => handleCitySelect3(e)}
          value={selectedCity3}
        >
          <option value="">Select the city</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>

        The selected city is {selectedCity} <br></br>
        The selected city is {selectedCity2} <br></br>
        The selected city is {selectedCity3} <br></br>
      </div>
    </div>
  );
}
