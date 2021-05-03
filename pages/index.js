import styles from "../styles/Home.module.scss";
import data from "./data/homepagePlants.json";
import subpageData from "./data/subpagePlants.json";
import { capitalize } from "lodash";
import Link from "next/link";

// Code for when using the Trefle API.
// import homepagePlantList from "./data/plantLists";

// import { getPlants } from "../lib/plants";

// export async function getStaticProps() {

//   const allPlantsData = await getPlants(homepagePlantList);
//   return {
//     props: {
//       allPlantsData,
//     },
//   };
// }

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Plantification</h1>
        <h6 className={styles.subtitle}>
          Examples of plants for different situations
        </h6>

        <div className={styles.subpageTileContainer}>
          {Object.keys(subpageData).map((page) => (
            <Link href={`/${page}`}>
              <div className={styles.subpageTile}>
                <h6>{capitalize(page).replace(/-/g, " ")}</h6>
              </div>
            </Link>
          ))}
        </div>

        <main className={styles.main}>
          {data.map((plant) => (
            <div className={styles.figure} key={plant.id}>
              <img
                src={plant.image_url}
                alt={plant.common_name}
                className={styles.images}
              ></img>
              <p>{plant.common_name}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
