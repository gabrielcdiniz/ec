import type { NextPage } from "next";
import styles from "./styles.module.scss";

const SearchInput: NextPage = () => {
  return (
    <input type="text" placeholder="search" name="search-input" className={styles.searchInput} />
  );
};

export { SearchInput };
