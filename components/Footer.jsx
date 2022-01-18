import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 Çankaya #304.
            <br /> Ankara, 85022
            <br /> (312) 999 00 00
          </p>
          <p className={styles.text}>
            2356 Bahçelievler  #235.
            <br /> Ankara, 85022
            <br /> (312) 999 02 02
          </p>
          <p className={styles.text}>
            1614 Eryaman #104.
            <br /> Ankara, 85022
            <br /> (312) 999 97 97
          </p>
          <p className={styles.text}>
            1752 Batıkent  #125.
            <br /> Ankara, 85022
            <br /> (312) 999 98 98
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
