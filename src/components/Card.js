import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sunny from "./img/sunny.gif";

export default function Card() {
  return (
    <div className="margin-100">
      <div className="d-flex justify-content-around">
        <div className="card card-size">
          <div className="row text-center my-3">
            <div className="col-auto  mt-2 ms-3">
              <select
                className="form-select text-center"
                aria-label="Default select example"
              >
                <option selected>Şehir</option>
                <option value="1">Berlin</option>
                <option value="2">Paris</option>
                <option value="3">Ankara</option>
                <option value="3">Dubai</option>
              </select>
            </div>
            <div className="col mt-3 me-3">
              <div className="form-check form-switch form-check-reverse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckReverse"
                ></label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-1">
            <div>
              <img src={Sunny} alt="" className="img-size" />
            </div>
          </div>
          <div>
            <p className="fs-5 text-center">Sunny</p>
          </div>
          <div className="row mt-3">
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
                <span>21</span>
                <span> km/h </span>
              </div>
              <div className="col">
                <span>90</span>
                <span> % </span>
              </div>
              <div className="col">
                <span>0.5</span>
                <span> h </span>
              </div>
            </div>
            <div className="col text-end me-3">
              <span className="feels-like-text">17</span>
              <span className="feels-like-text">°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
