import React from "react";

interface IfromConvert {
  name: string[];
  charCode: string[];
  fromCurrency: string;
  setFromCurrency: (value: string) => void;
  firstInputValue: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FromConvert = function ({
  fromCurrency,
  setFromCurrency,
  name,
  charCode,
  firstInputValue,
  inputHandler,
}: IfromConvert) {
  return (
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
      </div>
    </div>
  );
};

export default FromConvert;
