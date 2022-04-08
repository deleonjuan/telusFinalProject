import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// redux
import { connect } from "react-redux";
import { actions } from "../../redux/reducers/urlshortener";

import "./styles.css";

const URLShortenerApp = (props) => {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");
  let { urlHash } = useParams();

  // verificar si tiene hash
  useEffect(() => {
    // si tiene consulta el hash a la api, y redirige
    if (urlHash) {
      props.getUrl(urlHash);
    }
  }, []);

  // redirige en el momento que detecta una url nueva
  useEffect(() => {
    if (props.url) window.location.href = props.url;
  }, [props.url]);

  const convert = () => {
    props.postUrl({url})
    // setNewUrl(props.newUrl)
    // setNewUrl("https://reactjs.org/docs/hooks-reference.html#usestate");
  };

  const onHandleChange = (event) => {
    setUrl(event.target.value);
  };

  return !urlHash ? (
    <div id="urlshortener" className="mt-5">
      <div style={{ width: "80rem" }}>
        <h1>URLShortener App</h1>
        <input
          type="text"
          placeholder="URL AQUI"
          onChange={onHandleChange}
          value={url}
        />
        <button onClick={convert} className="button b-red">
          Acortar
        </button>

        {props.newUrl !== "" && (
          <>
            <h2>Tu nueva url es:</h2>
            <h3>{window.location.href}/{props.newUrl}</h3>
          </>
        )}
      </div>
    </div>
  ) : (
    <>
      <span>{props.url? null : "Parece que esta no es una url valida!"}</span>
    </>
  );
};

const ms2p = (state) => {
  return {
    ...state.urlshortener,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(URLShortenerApp);
