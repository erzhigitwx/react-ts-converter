import React, { useEffect, useState, useMemo } from "react";
import FromConvert from "./fromConvert";
import ToConvert from "./toConvert";

interface Iconverter {
  name: string[];
  charCode: string[];
  value: number[];
  nominal: number[];
  lastDateShow: string;
  nowDateShow: string;
}

const Converter = function ({
  name,
  charCode,
  value,
  nominal,
  lastDateShow,
  nowDateShow,
}: Iconverter) {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState(0);

  const fromCurrencyIndex = useMemo(
    () => charCode.indexOf(fromCurrency),
    [charCode, fromCurrency]
  );
  const toCurrencyIndex = useMemo(
    () => charCode.indexOf(toCurrency),
    [charCode, toCurrency]
  );
  const fromNominal = nominal[fromCurrencyIndex];
  const fromValue = value[fromCurrencyIndex];
  const toNominal = nominal[toCurrencyIndex];
  const toValue = value[toCurrencyIndex];

  useEffect(() => {
    if (charCode.length > 0) {
      setFromCurrency(charCode[0]);
      setToCurrency(charCode[0]);
    }
  }, [charCode]);
  useEffect(() => {
    let currencyValue =
      ((toNominal / toValue) * Number(firstInputValue)) /
      (fromNominal / fromValue);
    setResult(Number(currencyValue.toFixed(3)));
  }, [firstInputValue, fromCurrency, toCurrency, charCode, nominal, value]);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstInputValue(e.target.value);
  }

  const windowWidth = window.innerWidth;

  return (
    (windowWidth >= 550 && (
      <>
        <h1 className="app-title">Converter</h1>
        <div className="dates">
          <p className="last-date">updated: {lastDateShow}</p>
          <p className="now-date">today: {nowDateShow}</p>
        </div>
        <div className="converter">
          <FromConvert
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            name={name}
            charCode={charCode}
            firstInputValue={firstInputValue}
            inputHandler={inputHandler}
          />
          <ToConvert
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
            name={name}
            charCode={charCode}
            result={result}
          />
        </div>
      </>
    )) || (
      <>
        <h1 className="app-title">Converter</h1>
        <div className="dates">
          <p className="last-date">updated: {lastDateShow}</p>
          <p className="now-date">today: {nowDateShow}</p>
        </div>
        <div className="converter">
          <div className="converter__first-block">
            <p className="first-block__text">From</p>
            <div className="first-block__content">
              <select
                value={fromCurrency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFromCurrency(e.target.value)
                }
                className="first-block__content-text"
              >
                {name.map((elem, index) => (
                  <option key={elem} value={charCode[index]}>
                    {elem}: {charCode[index]}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="first-block__content-input"
                value={firstInputValue}
                onChange={inputHandler}
              />

              <select
                className="second-block__content-text"
                value={toCurrency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setToCurrency(e.target.value)
                }
              >
                {name.map((elem, index) => (
                  <option key={elem} value={charCode[index]}>
                    {elem}: {charCode[index]}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="second-block__content-input"
                value={isNaN(result) ? "" : result}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Converter;
