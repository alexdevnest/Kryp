import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import CandlestickChart from '@/components/CandlestickChart';


export default async function CoinOverview () {
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
    dex_pair_format: 'symbol',
  });

  const coinOHLCData = await fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
    vs_currency: 'usd',
    days: 1,
    precision: 'full',
  }).catch(() => []);


  return (
    <div id="coin-overview">
      <CandlestickChart data={coinOHLCData} coinId="bitcoin">
        <div className="header pt-2">
          <Image
            src={coin.image.large}
            alt={coin.name}
            width={50}
            height={50}
          />
          <div className="info">
            <p>{ coin.name } / { coin.symbol.toUpperCase() }</p>
            <h1>
              { formatCurrency(coin.market_data.current_price.usd) }
            </h1>
          </div>
        </div>
      </CandlestickChart>
    </div>
);
}