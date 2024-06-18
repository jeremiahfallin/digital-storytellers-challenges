import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>cardss</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="cards-page">
        <div class="cards-container">
          <div class="cards">
            <div class="cards-header">
              <h2>cards Title 1</h2>
            </div>
            <div class="cards-image">
              <img
                src="https://via.placeholder.com/300x200.png?text=Image"
                alt="cards Image 1"
              />
            </div>
            <div class="cards-description">
              <p>
                This is a description of cards 1. It provides some information
                about the content of the cards.
              </p>
            </div>
            <div class="cards-button">
              <button>Read More</button>
            </div>
          </div>
          <div class="cards">
            <div class="cards-header">
              <h2>cards Title 2</h2>
            </div>
            <div class="cards-image">
              <img
                src="https://via.placeholder.com/300x200.png?text=Image"
                alt="cards Image 2"
              />
            </div>
            <div class="cards-description">
              <p>
                This is a description of cards 2. It provides some information
                about the content of the cards.
              </p>
            </div>
            <div class="cards-button">
              <button>Read More</button>
            </div>
          </div>
          <div class="cards">
            <div class="cards-header">
              <h2>cards Title 3</h2>
            </div>
            <div class="cards-image">
              <img
                src="https://via.placeholder.com/300x200.png?text=Image"
                alt="cards Image 3"
              />
            </div>
            <div class="cards-description">
              <p>
                This is a description of cards 3. It provides some information
                about the content of the cards.
              </p>
            </div>
            <div class="cards-button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
