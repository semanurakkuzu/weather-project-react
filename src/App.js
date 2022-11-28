import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import wheatherCodes from "./wheatherCodes";

export default function App() {
  const coordinates = {
    Berlin: { lat: "52.510566", long: "13.38279" },
    Paris: { lat: "48.853566", long: "2.34361" },
    Ankara: { lat: "39.925001", long: "32.83698" },
    Dubai: { lat: "24.991306", long: "55.171569" },
  };

  const wheaterTypes = wheatherCodes;

  const [wheatherData, setWheatherData] = useState();

  const getDataFromApi = (coordinate) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.long}&daily=weathercode,temperature_2m_max,windspeed_10m_max,shortwave_radiation_sum&timezone=Europe/Istanbul&start_date=2022-11-23&end_date=2022-11-23&hourly=relativehumidity_2m`;

    fetch(url)
      .then((response) => response.json())
      .then((apiWheatherData) => setWheatherData(apiWheatherData))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDataFromApi(coordinates.Berlin);
  }, []);

  function handleSelect(event) {
    let value = event.target.value;
    getDataFromApi(coordinates[value]);
  }

  const [theme, setTheme] = useState();
  function handleThemeChange(e) {
    if(e.target.checked == true) {
      setTheme('dark-card');
    }
    else {
      setTheme('');
    }
   
  }

  return (
    <>
      <div className="container">
        <div className="margin-100">
          <div className="d-flex justify-content-around">
            <div className={`card card-size ${theme}`}>
              <div className="row text-center my-3">
                <div className="col-auto  mt-2 ms-3">
                  <select
                    className="form-select text-center"
                    aria-label="Default select example"
                    onChange={handleSelect}
                    defaultValue={"Berlin"}
                  >
                    <option value="Berlin">Berlin</option>
                    <option value="Paris">Paris</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </div>
                <div className="col mt-3 me-3">
                  <div className="form-check form-switch form-check-reverse">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckReverse"
                      onChange={handleThemeChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckReverse"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-1">
                <div>
                  <img
                    src={
                      wheatherData &&
                      wheaterTypes[wheatherData.daily.weathercode[0]].icon
                    }
                    alt=""
                    className="img-size"
                  />
                </div>
              </div>
              <div>
                <p className="fs-5 text-center">
                  {wheatherData &&
                    wheaterTypes[wheatherData.daily.weathercode[0]].title}
                </p>
              </div>
              <div className="row my-3">
                <div className="col-auto ms-3 mt-1">
                  <div className="col">
                    <FontAwesomeIcon icon="wind" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon="droplet" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon="sun" />
                  </div>
                </div>
                <div className="col mt-1">
                  <div className="col">
                    <span>
                      {wheatherData && wheatherData.daily.windspeed_10m_max[0]}
                    </span>
                    <span> km/h </span>
                  </div>
                  <div className="col">
                    <span>
                      {wheatherData &&
                        wheatherData.hourly.relativehumidity_2m[5]}
                    </span>
                    <span> % </span>
                  </div>
                  <div className="col">
                    <span>
                      {wheatherData &&
                        wheatherData.daily.shortwave_radiation_sum[0]}
                    </span>
                    <span> MJ/m² </span>
                  </div>
                </div>
                <div className="col text-end me-3">
                  <span className="feels-like-text">
                    {wheatherData && wheatherData.daily.temperature_2m_max[0]}
                  </span>
                  <span className="feels-like-text">°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
