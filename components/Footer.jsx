import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE DAGO GODROGODRO, WELL BAKED SLICE OF GODROGODRO.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            IB 186 | 3611, Cite Tanambao.
            <br /> Fianarantsoa, 301
            <br /> +261 34 85 617 82
          </p>
          <p className={styles.text}>
            A 69 | 312, Avaradrova.
            <br /> Morondava, 619
            <br /> +261 34 25 135 21
          </p>
          <p className={styles.text}>
            IL 120 | 6541, Isoraka.
            <br /> Antananarivo, 101
            <br /> +261 34 41 217 53
          </p>
          <p className={styles.text}>
            TP 16 | 1123, Tanambao II.
            <br /> Toamasina, 501
            <br /> +261 34 72 057 69
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 08:00 – 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
