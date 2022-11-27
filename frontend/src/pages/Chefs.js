import React, { useState, useEffect} from "react";
import ChefCard from "../components/ChefCard";
import { getChefs } from "../utils/api";

// import chefs from "../data/chefs.json";

export default function Chefs () {
  let [chefs, setChefs] = useState([]);
  
  useEffect(() => {
    const fetchChefs = async () => {
      let data = await getChefs()
      setChefs(data);
    };
    fetchChefs();
  }, []);

  return  (
    <React.Fragment>
      {chefs.map(chef => (
        <React.Fragment>
          <ChefCard {...chef} />
          <br/>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}