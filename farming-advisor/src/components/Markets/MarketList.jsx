import { useEffect, useState } from "react";
import { fetchMarkets } from "../../api";

function MarketList() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    async function loadMarkets() {
      setMarkets(await fetchMarkets());
    }
    loadMarkets();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Market Data</h2>
      <ul>
        {markets.map((market) => (
          <li key={market.Market_ID} className="border p-2 mb-2">
            {market.Product} - ${market.Market_Price_per_ton}/ton
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarketList;
