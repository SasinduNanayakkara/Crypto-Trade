import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
const  NotFount = () => {
  return (
    <Layout>
    <section>
        <div className="container">
            <div className="--center-all">
                <h1>Opps!!! Looks like you are lost.</h1>
                <p>It appars this page does not exist, Please go back to home.</p>
                <br />
                <Link href="/">
                    <button className="--btn --btn-primary">Back to Home</button>
                </Link>
            </div>
        </div>
    </section>
    </Layout>
  )
}

export default NotFount;