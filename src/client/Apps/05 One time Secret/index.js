import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./styles.css";
// redux
import { connect } from "react-redux";
import { actions } from "../../redux/reducers/secret";

import { ReactComponent as Waves } from "./waves.svg";

const OneTimeSecret = (props) => {
  const [message, setMessage] = useState("");
  const [timesAllowed2View, setTimesAllowed2View] = useState(1);
  // obtiene el hash del secreto
  let { secretcode } = useParams();

  useEffect(() => {
    if (secretcode) props.getMessage(secretcode);
  }, []);

  const onSendMessage = () => {
    props.postMessage({
      secret: message,
      timesAllowedtoWatch: timesAllowed2View,
    });
  };

  return (
    <div id="secret" className="App">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-50 py-5 align-items-start">
          <h1>one time secret</h1>
          <textarea
            disabled={secretcode ? true : false}
            placeholder="Tu secreto aqui"
            onChange={({ target }) => setMessage(target.value)}
            value={props.message || message}
          />
          {!secretcode && (
            <>
              <div class="mb-3">
                <label class="form-label">
                  Veces que se podra ver el secreto
                </label>
                <input
                  class="form-control"
                  type="number"
                  placeholder="Veces que se podra ver el secreto"
                  onChange={({ target }) => setTimesAllowed2View(target.value)}
                  value={timesAllowed2View}
                />
              </div>
              <button className="btn btn-danger mt-2" onClick={onSendMessage}>
                Enviar
              </button>
            </>
          )}

          {props.hash && (
            <span>
              {window.location.href}/
              {props.hash}
            </span>
          )}
        </div>
      </div>

      <Waves />
    </div>
  );
};

const ms2p = (state) => {
  return {
    ...state.secret,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(OneTimeSecret);
