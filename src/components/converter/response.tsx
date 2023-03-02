import { FC, useEffect } from "react";

interface Iresponse {
  handler: (
    name: string,
    charCode: string,
    value: number,
    nominal: number,
    date: any
  ) => void;
}
const Response: FC<Iresponse> = function ({ handler }) {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();
    const Valute = data.Valute;
    const lastDate = data.Date;
    for (const key in Valute) {
      const currency = Valute[key];
      handler(
        currency.Name,
        currency.CharCode,
        currency.Value,
        currency.Nominal,
        lastDate
      );
    }
  }
  return null;
};

export default Response;
