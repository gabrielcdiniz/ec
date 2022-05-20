import type { NextPage } from "next";
import { SearchInput } from "../SearchInput";
import styles from "./styles.module.scss";

type HeaderProps = {
  withSearch?: boolean;
};

const Header: NextPage<HeaderProps> = ({ withSearch = true }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>NOME DO SITE</h1>

      {/* input de pesquisa */}
      {withSearch && <SearchInput />}

      {/* botao de sair */}
    </header>
  );
};

export { Header };
