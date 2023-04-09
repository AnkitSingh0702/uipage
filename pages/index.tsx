import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Section from "../Components/Section";
import Left from "../Components/Left";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ui Page</title>
        <meta name="description" content="Ui Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Section />

      <Left />
    </div>
  );
};

export default Home;
