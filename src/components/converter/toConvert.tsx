import React from 'react';

interface ItoConvert {
  name: string[];
  charCode: string[];
  toCurrency: string;
  setToCurrency: (value: string) => void;
  result: number;
}

const ToConvert = function ({toCurrency, setToCurrency, name, charCode, result}: ItoConvert) {
    return(
        <div className="converter__second-block">
          <p className="second-block__text">to</p>
          <div className="second-block__content">
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
    );
  };


export default ToConvert;