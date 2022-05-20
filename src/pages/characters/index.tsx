import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const CharactersPage: NextPage = () => {
  return (
    <>
      <Header withSearch={false} />

      <section>
        <h1>Title</h1>

        <p>Description</p>
      </section>

      <Footer />
    </>
  );
};

export default CharactersPage;
