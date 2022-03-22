import React, { useState } from "react";
import "./styles.css";

function JSONtoCSVApp() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [jsonError, setJsonError] = useState("");

  const onHandler = (event) => setJson(event.target.value);
  const copyToClipBoard = () => navigator.clipboard.writeText(csv);
  const onClean = () => {
    setCsv("");
    setJson("");
    setJsonError("");
  };

  const convertToCsv = () => {
    try {
      let formattedJson = JSON.parse(json);
      let cvsConverted = _convertToCsv(formattedJson);

      setCsv(cvsConverted);
      setJsonError("");
    } catch (e) {
      setJsonError("imposible de convertir");
      console.log(e);
    }
  };

  const _convertToCsv = (data = []) => {
    var csv = "";

    // agrega los index
    for (var index in data[0]) csv += `${index},`;

    // agrega todos los campos
    data.map((item, key) => {
      var line = "";

      for (var index in data[key]) {
        if (line != "") line += ",";
        line += data[key][index];
      }

      csv += "\r\n" + line;
    });

    return csv;
  };

  return (
    <div
      style={{
        height: "96.8vh",
        backgroundColor: "#EEE",
      }}
      className="app-container d-flex align-items-center justify-content-center"
    >
      <div className="glass">
        <h1 className="text-white">Json to CSV</h1>
        <div className="d-flex flex-row gap-4">
          <textarea placeholder="json here" value={json} onChange={onHandler} />

          <div className="d-flex flex-column gap-4">
            <button onClick={convertToCsv}>Convertir</button>
            <button onClick={onClean}>Limpiar</button>
            <button onClick={copyToClipBoard}>Copiar CSV</button>
            <button onClick={() => null}>Formatear</button>
          </div>
          <textarea placeholder="csv" value={csv} disabled />
        </div>
        {jsonError.length ? <h5 className="text-white">{jsonError}</h5> : ""}
      </div>
    </div>
  );
}

export default JSONtoCSVApp;
