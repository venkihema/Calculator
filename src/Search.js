import { useState } from "react";

const villages = [
  "mabagam",
  "killam",
  "eedulavalasa",
  "narasannapeta",
  "devadi",
  "makivalasa",
  "khansahebpeta",
];
export function Search() {
  const [data, setData] = useState("");
  const dataSearch = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <center>
        <input type="text" value={data} onChange={dataSearch} />
        {villages
          .filter((vil, index) =>
            vil.toLowerCase().includes(data.toLowerCase())
          )
          .map((vil, index) => {
            return <div key={index}>{vil}</div>;
          })}
      </center>
    </div>
  );
}
