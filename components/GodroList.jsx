import styles from "../styles/GodroList.module.css";
import GodroCard from "./GodroCard";

const GodroList = ({ godroList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST GODROGODRO IN DAGO</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {godroList.map((godro) => (
          <GodroCard key={godro._id} godro={godro} />
        ))}
      </div>
    </div>
  );
};

export default GodroList;
