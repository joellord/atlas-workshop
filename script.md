# Atlas workshop script

## Step 1

### Intro (5)

### Prepare the environment (10)
git clone
create atlas account
create atlas cluster

### Schema design in MongoDB (35)
go through slides

### Break
break 10 minutes

## Step 2

### Quick Tour of MongoDB Atlas
Import sample data
Show database and app services

### Import application data
Import into database "recipeBook" into collection "recipes" and "chefs" from the ./frontend/src/data files

### Connect Node.js backend
Create a node.js backend from scratch
Create the two endpoints
Test with curl

### Connect front-end, and demo app
Create the api.js file
Connect the data

### Enable Data API
From the atlas UI

### Connect front-end to data api
Change the api.js file to use the Data API
This will fail due to CORS

### (Stretch) Rewrite backend with Data API
If time permits

## Section 3

### Different ways to connect the a database (pros and cons of data API)
Go through slides

### Create CRUD endpoints for the app in HTTPS endpoints
Write function getRecipes, then create HTTPS endpoint
Connect backend
Do the same for getChefs
Stop backend, demo app

### Introduction to aggregation pipelines
> **Note**
> A search index should be pre-created on the `movies` collection from `sample_mflix`

Build the `demoAggregation.js` pipeline on the `movies` collection.
Show how to export to code with driver syntax.

### Introduction to full-text search
Create a new pipeline to search for a movie title.

```
{
  $match: {
    title: "Harry Potter"
  }
}
```
(No results)

```
{
  $match: {
    title: {$regex: /Harry Potter/}
  }
}
```

Search for Harry Potter and the Sorcerer's Stone
```
{
  $match: {
    title: {$regex: /Har*[iy] P[ao]t*er.*Sorcerer/}
  }
}
```

This query is slow, and users won't be able to type in regexes.
Use $search instead

```
{
  index: 'default',
  text: {
    query: 'Harry Potter Sorcerer',
    path: 'title'
  }
}
```

### Enable full-text search capabilities
Create search index on recipes collection

Build aggregation pipeline
```
[
  {
    $search: {
      index: 'default',
      text: {
        query: 'broccoli',
        path: {
          'wildcard': '*'
        }
      }
    }
  }
]
```
Create function (searchRecipes.js)
Create HTTPS endpoint /search
Connect front-end

## Section 4

### Collection watch for real time statistics on visitors
App authentication
Add rule
Copy App Id to config
Add useEffect to Stats page to watch for changes

### Create a Chart for data visualization
Intro to Charts

### Host files on App Services
npm run build
Upload files
Run from App Services

### Recap and conclusion
Slides
