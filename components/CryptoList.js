import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/CryptoList.module.scss";
import Search from './Search';
import ReactPaginate from 'react-paginate';

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
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  //pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filtered.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filtered.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filtered]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filtered.length;  
      setItemOffset(newOffset);
    };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log();
  };

  useEffect(() => {
    setFiltered(
      coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, coins]);

  return (
    <section className='coin-list'>
      <div className="container">
        <div className={styles.table}>
          <Search value={search} onChange={handleSearch}/>
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
              {currentItems.map((coin, index) => {
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
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
      </div>
    </section>
  )
}

export default CryptoList;