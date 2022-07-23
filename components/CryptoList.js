import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/CryptoList.module.scss";

export const formatNumbers = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const checkPrice = (price) => {
  const priceChange1d = Math.sign(price);
  if (priceChange1d === -1) {
    return "red";
  }
  else {
    return "green";
  }
}
const CryptoList = ({coins}) => {
  return (
    <section className='coin-list'>
      <div className="container">
        <div className={styles.table}>
          <table>
            <thead>
            <tr>
              <th>s/n</th>
              <th>Coin</th>
              <th>Price</th>
              <th>Change 24H</th>
              <th>Market Cap</th>
            </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => {
                const {
                  id, 
                  name,
                  symbol, 
                  price,
                  icon,
                  priceChange1d,
                  marketCap,
                } = coin;
                return (
                  <Link key={id} href={"/" + id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={icon} alt={name} width="20" height="20"/>
                      &nbsp;{symbol}
                    </td>
                    <td>$ {formatNumbers(price.toFixed(2))}</td>
                    <td className={checkPrice(priceChange1d)}>{priceChange1d}</td>
                    <td>$ {formatNumbers(marketCap.toFixed(2))}</td>
                  </tr>
                  </Link>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default CryptoList