exports = async function({query}){
  const { search } = query;
  console.log(JSON.stringify(query));
  const collection = context.services.get("mongodb-atlas").db("recipeBook").collection("recipes");
  const recipes = await collection.aggregate([
    {
      $search: {
        index: 'default',
        text: {
          query: search,
          path: {
            'wildcard': '*'
          }
        }
      }
    }
  ]);
  return recipes;
};