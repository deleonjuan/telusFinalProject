import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./styles.css";

import { ReactComponent as Waves } from "./waves.svg";

const OneTimeSecret = (props) => {
  // obtiene el hash del secreto
  let { secretcode } = useParams();

  useEffect(() => {
    console.log(secretcode);
  }, []);

  return (
    <div id="secret" className="App">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-50 py-5 align-items-start">
          <h1>one time secret</h1>
          <textarea
            disabled={secretcode ? true : false}
            placeholder="Tu secreto aqui"
          />
          {!secretcode && (
            <button className="btn btn-danger mt-2">Enviar</button>
          )}
        </div>
      </div>

      <Waves />
    </div>
  );
};

export default OneTimeSecret;
