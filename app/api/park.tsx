import axios from "axios";
import { GetStaticProps } from "next";
import Page from "../parks/page";

interface IndexPageProps {
  parks: Array<{
    name: string;
    img: string;
    state: string;
    activities: string;
  }>;
}
interface Park {
  id: string;
  fullName: string;
  states: string;
  images: Array<{ url: string }>;
  activities: Array<{ name: string }>;
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  try {
    console.log("Fetching data from API");
    const apiUrl =
      "https://developer.nps.gov/api/v1/parks?stateCode=WA&api_key=mh9ahtxIO5fhbnKFaeu6dMleOmK11DGk289gULQO";
    console.log("API URL:", apiUrl);

    const response = await axios.get<{ data: Array<Park> }>(apiUrl);
    console.log("API Response:", response);

    const parks = response.data.data.map((park) => ({
      name: park.fullName,
      img: park.images[0]?.url || "",
      state: park.states,
      activities:
        park.activities
          .filter((activity) =>
            [
              "Biking",
              "Camping",
              "Picknicking",
              "Hiking",
              "Kayaking",
              "Stand Up Paddleboarding",
            ].includes(activity.name.toLowerCase())
          )
          .map((activity) => activity.name)
          .join(", ") || "",
    }));

    console.log("Transformed Parks Data:", parks);

    return {
      props: { parks },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
};
const IndexPage: React.FC<IndexPageProps> = ({ parks }) => {
  return <Page parks={parks} />;
};
export default IndexPage;
