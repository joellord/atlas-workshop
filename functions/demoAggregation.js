[{
  $match: {
  genres: "Comedy"
}
},
{
  $match: /**
 * query: The query in MQL.
 */
{
  runtime: {"$gte": 90}
}
},
{
  $unwind: /**
 * path: Path to the array field.
 * includeArrayIndex: Optional name for index.
 * preserveNullAndEmptyArrays: Optional
 *   toggle to unwind null and empty values.
 */
{
  path: "$countries"
}
},
{
  $group: /**
 * _id: The id of the group.
 * fieldN: The first field name.
 */
{
  _id: "$countries",
  moviesByCountry: {
    $sum: 1
  }
}
},
{
  $sort: /**
 * Provide any number of field/order pairs.
 */
{
  moviesByCountry: -1
}
},
{
  $limit: /**
 * Provide the number of documents to limit.
 */
5
}
]