import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Featured from "../components/Featured";
import GodroList from "../components/GodroList";
import styles from "../styles/Home.module.css";

export default function Home({ godroList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dago's Godrogodro</title>
        <meta name="description" content="Best godro shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <GodroList godroList={godroList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://godrogodrodago.azurewebsites.net/api/products");
  return {
    props: {
      godroList: res.data,
      admin,
    },
  };
};
