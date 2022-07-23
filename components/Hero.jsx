import React from 'react';
import Image from 'next/image';
function Hero() {
  return (
    <section>
        <div className='container hero --flex-dir-column'>
            <div className='hero-text'>
                <h1>The Fastest way to buy and sell crypto currencies</h1>
                <p>Join th Crypto Trade network today for low transaction fees and good customer service. This is the best crypto exchange platform out there</p>
                <a href='#' className='--btn --btn-primary'>Get Started</a>
            </div>

            <div className='hero-image'>
                <Image src="/crypto.png" alt="Crypto Trade" width="225" height="450" />
            </div>
        </div>
    </section>
  )
}

export default Hero