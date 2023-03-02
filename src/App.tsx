import React, { useState } from "react";
import Converter from "./components/converter/converter";
import Response from "./components/converter/response";
import "./styles/App.scss";

function App() {
  const [name, setName] = useState<string[]>([]);
  const [charCode, setCharCode] = useState<string[]>([]);
  const [value, setValue] = useState<number[]>([]);
  const [nominal, setNominal] = useState<number[]>([]);
  const [date, setDate] = useState("");

  const handler = (
    name: string,
    charCode: string,
    value: number,
    nominal: number,
    date: any,
  ) => {
    setName((prevName) => [...prevName, name]);
    setCharCode((prevCharCode) => [...prevCharCode, charCode]);
    setValue((prevValue) => [...prevValue, value]);
    setNominal((prevNominal) => [...prevNominal, nominal]);
    setDate(date)
  };
  const lastDate = new Date(date)
  const lastDateShow = `${lastDate.getDay()}-${lastDate.getMonth()}-${lastDate.getFullYear()}`;
  const nowDate = new Date();
  const nowDateShow = `${nowDate.getDay()}-${nowDate.getMonth()}-${nowDate.getFullYear()}`
  
  return (
    <div className="App">
      <Response handler={handler} />
      <Converter
        name={name}
        charCode={charCode}
        value={value}
        nominal={nominal}
        lastDateShow={lastDateShow}
        nowDateShow={nowDateShow}
      />
    </div>
  );
}

export default App;
