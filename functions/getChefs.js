exports = async function(arg){
  const collection = context.services.get("mongodb-atlas").db("recipeBook").collection("chefs");
  const chefs = await collection.find({});
  return chefs;
};