import React, { useState, useEffect } from "react";
import { H2, H3, Body } from "@leafygreen-ui/typography";
import * as Realm from "realm-web";
import config from "../config";

export default function Home () {
  let [latestRecipe, setLatestRecipe] = useState("");

  useEffect(() => {
    const app = new Realm.App({ id:  config.APP_ID});
    const login = async () => {
      await app.logIn(Realm.Credentials.anonymous());
      
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const recipeCollection = mongodb.db("recipeBook").collection("recipes");
      for await (const change of recipeCollection.watch()) {
        if (change.operationType === "delete") return;
        let fullDocument = change.fullDocument;
        setLatestRecipe(fullDocument.title);
      }
    }
    login();
  }, []);
  
  return  (
    <React.Fragment>
      <H2>Latest changes</H2>
      <H3>Recipes</H3>
      <Body>{latestRecipe}</Body><br/>
    </React.Fragment>
  )
}