// pages/index.js

import Head from "next/head";
import VideoAssistant from "../components/VideoAssistant";

function Home() {
  return (
    <div>
      <Head>
        <title>My Video Assistant</title>
        <meta name="description" content="Video assistant example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Website</h1>
        {/* Other content of your web page */}
      </main>

      <footer>
        {/* Include the VideoAssistant component */}
        <VideoAssistant />
      </footer>
    </div>
  );
}

export default Home;
