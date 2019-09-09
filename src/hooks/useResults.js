import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrormMessage("Something went wrong");
    }
  };

  // Call search api when component
  // is first rendered. BAD CODE !!
  // searchApi("pasta");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
