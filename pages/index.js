import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="title">
          <div className="row">
            <h3>hey friend, i am </h3>
            <h1>COUNT SHIRTY</h1>
          </div>
          <h4>from the time you wear me</h4>
          <h3> you'll feel light and cool</h3>
        </div>
        <section className="section">
          <div className="title">
            <h2>some texts </h2>
            <h2>some texts </h2>
          </div>
          <img className="image" src="/countShirty_coverPhot.png" />
        </section>
        <section className="section">
          <img className="image" src="/countShirty_coverPhot.png" />
          <div className="title">
            <h2>some text </h2>
            <h2>some text </h2>
          </div>
        </section>
        <section className="section">
          <div className="title">
            <h2>some text </h2>
            <h2>some text </h2>
          </div>
          <img className="image" src="/countShirty_coverPhot.png" />
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding: 2rem;
          align-items: center;
        }
        .container {
          margin: 0 80px 0 120px;
          width: 1200px;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

        .section {
          display: flex;
          align-items: flex-start;
          flex-wrap: nowrap;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .row {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          height: 30vh;
          display: flex;
          flex-direction: column;
        }
        .image {
          width: 40%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        h1 {
          margin: 0;

          padding: 0;
          font-size: 50px;
          font-weight: 300;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 40px;
          font-weight: 300;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 30px;
          font-weight: 300;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 20px;
          font-weight: 300;
        }
        p {
          margin: 0;
          padding: 0;
          font-size: 10px;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
