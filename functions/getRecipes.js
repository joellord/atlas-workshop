exports = async function(arg){
  const collection = context.services.get("mongodb-atlas").db("recipeBook").collection("recipes");
  const recipes = await collection.find({});
  return recipes;
};