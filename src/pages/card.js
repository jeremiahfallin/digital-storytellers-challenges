import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Card</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="card-layout">
        <div class="card">
          <div class="card-header">
            <h2>Outer Space</h2>
          </div>
          <div class="card-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Webb%27s_First_Deep_Field.jpg/1200px-Webb%27s_First_Deep_Field.jpg"
              alt="Outer space"
            />
          </div>
          <div class="card-description">
            <p>
              Outer space is the expanse that exists beyond Earth&apos;s
              atmosphere and between celestial bodies. It contains ultra-low
              levels of particle densities, constituting a near-perfect vacuum.
              The baseline temperature of outer space is 2.7 kelvins (-270 °C;
              -455 °F).
            </p>
          </div>
          <div class="card-button">
            <button>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
