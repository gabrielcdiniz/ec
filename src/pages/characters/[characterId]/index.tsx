import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

const CharactersDetailsPage: NextPage = () => {
  const { query } = useRouter();

  useEffect(() => {
    console.log({ query });
  }, []);

  return (
    <>
      <Header withSearch={false} />

      <section></section>

      <Footer />
    </>
  );
};

export default CharactersDetailsPage;
