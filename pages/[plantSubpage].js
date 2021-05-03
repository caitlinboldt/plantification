import { useRouter } from "next/router";
import { capitalize } from "lodash";
import subpageStyles from "../styles/PlantSubpage.module.scss";
import data from "./data/subpagePlants.json";
import textData from "./data/textSubpage.json";

export default function PlantSubpage() {
  const router = useRouter();
  const { plantSubpage } = router.query;
  const formattedTitle = plantSubpage && plantSubpage.replaceAll("-", " ");
  return (
    <div className={subpageStyles.main}>
      <div className={subpageStyles.container}>
        <div className={subpageStyles.infoCard}>
          <h2 className={subpageStyles.subtitle}>
            {capitalize(formattedTitle)}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: textData[plantSubpage] }} />
        </div>
        <div className={subpageStyles.featured}>
          {plantSubpage &&
            data[plantSubpage].map((plant) => (
              <div key={plant.id}>
                <img src={plant.image_url} alt={plant.common_name}></img>
                <p>{plant.common_name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
