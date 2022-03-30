import React, { useState } from "react";
import "./styles.css";

function URLShortenerApp() {
  const [url, setUrl] = useState("");

  const convert = () => {
    setUrl("https://reactjs.org/docs/hooks-reference.html#usestate");
  };

  return (
    <div id="urlshortener" className="mt-5">
      <div style={{ width: "80rem" }}>
        <h1>URLShortener App</h1>
        <input type="text" placeholder="URL AQUI" />
        <button onClick={convert} className="button b-red">
          Acortar
        </button>

        {url !== "" && (
          <>
            <h2>Tu nueva url es:</h2>
            <h3>{url}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default URLShortenerApp;
