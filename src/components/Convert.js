import React, { useEffect, useState } from "react";
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");

const subscriptionKey = "b702b8f0798049e5bd6ca48be4199f28";
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const location = "global";

const Convert = ({ term, lang }) => {
  const [results, setResults] = useState("");

  useEffect(() => {
    if (term !== "") {
      const translate = async () => {
        const translation = await axios({
          baseURL: endpoint,
          url: "/translate",
          method: "post",
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey,
            "Ocp-Apim-Subscription-Region": location,
            "Content-type": "application/json",
            "X-ClientTraceId": uuidv4().toString()
          },
          params: {
            "api-version": "3.0",
            from: "es",
            to: lang
          },
          data: [
            {
              text: term
            }
          ],
          responseType: "json"
        }).then(function (response) {
          setResults(response.data[0].translations[0].text);
        });
      };
      translate();
    }
  }, [lang, term]);

  return (
    <div className="content">
      <h3>Resultado</h3>
      <div className="ui massive message">{results}</div>
    </div>
  );
};

export default Convert;
