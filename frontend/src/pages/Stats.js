import React, { useState, useEffect } from "react";
import { H2, H3, Body } from "@leafygreen-ui/typography";
import * as Realm from "realm-web";
import config from "../config";

export default function Home () {
  let [latestRecipe, setLatestRecipe] = useState("");

  useEffect(() => {
    // Show latest updates in real-time here
  }, []);
  
  return  (
    <React.Fragment>
      <H2>Latest changes</H2>
      <H3>Recipes</H3>
      <Body>{latestRecipe}</Body><br/>
    </React.Fragment>
  )
}