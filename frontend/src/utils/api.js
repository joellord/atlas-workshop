import config from "../config";

const getRecipes = async () => {
  const url = `${config.BASE_URL}/recipes`;
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

// const getRecipes = async () => {
//   const url = `${config.BASE_URL}/findMany`;
//   const headers = {
//     "Content-Type": "application/json",
//     "Access-Control-Request-Headers": "*",
//     "api-key": config.DATA_API_KEY
//   };
//   const dataRaw = {
//     collection: "recipes",
//     database: "recipeBook",
//     dataSource :"Cluster0"
//   }
//   const data = await fetch(url, {
//     method: "POST",
//     headers,
//     body: JSON.stringify(dataRaw)
//   }).then(resp => resp.json());
//   return data;
// }

const getChefs = async () => {
  const url = `${config.BASE_URL}/chefs`;
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

const searchRecipes = async (searchTerm) => {
  const url = `${config.BASE_URL}/search?search=${searchTerm}`
  let data = await fetch(url).then(resp => resp.json());
  return data;
}

export {
  getRecipes,
  getChefs,
  searchRecipes
}