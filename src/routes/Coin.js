import React, { useEffect, useState } from "react";
import Coloring from "../components/Coloring";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [viewCoins, setViewCoins] = useState([]);
  const [coinSelect, setCoinSelect] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respons) => respons.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const select = (e) => {
    setCoinSelect(e.target.value);
  };
  useEffect(() => {
    setViewCoins([]);
    if (coinSelect === "") {
      return;
    }
    for (let temp in coins) {
      if (coins[temp].name.toUpperCase().includes(coinSelect.toUpperCase())) {
        setViewCoins((v) => [...v, coins[temp]]);
      }
    }
  }, [coinSelect]);

  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <>
          <input
            type={"text"}
            list={"list"}
            id={"coinSelect"}
            onChange={select}
          />
          <datalist id={"list"}>
            {coins.map((coin, index) => (
              <option key={index} value={coin.name}>
                {coin.name}
              </option>
            ))}
          </datalist>
          <div>
            <span>select coin ({viewCoins.length})</span>
          </div>
          <ul>
            {viewCoins.map((coin, index) => (
              <li key={index}>
                {coin.name} ({coin.symbol}):{" "}
                <Coloring text={coin.quotes.USD.price}></Coloring>원
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Coin;
