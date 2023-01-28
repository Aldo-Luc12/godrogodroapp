import Image from "next/image";
import styles from "../styles/GodroCard.module.css";
import Link from "next/link";

const GodroCard = ({ godro }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${godro._id}`} passHref>
        <Image src={godro.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{godro.title}</h1>
      <span className={styles.price}>${godro.prices[0]}</span>
      <p className={styles.desc}>{godro.desc}</p>
    </div>
  );
};

export default GodroCard;
