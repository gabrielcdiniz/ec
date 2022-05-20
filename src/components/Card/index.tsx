import Link from "next/link";
import styles from "./styles.module.scss";

type CardProps = {
  id: number;
  title: string;
  description: string;
};

const Card = ({ id, title, description }: CardProps) => {
  return (
    <Link href={`/characters/${id}`}>
      <a>
        <article className={styles.card}>
          <h1>Title: {title}</h1>

          <p>Description: {description}</p>
        </article>
      </a>
    </Link>
  );
};

export { Card };
