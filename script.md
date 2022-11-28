# Atlas workshop script

## Step 1

### Intro (5)

### Prepare the environment (10)
git clone
create atlas account
create atlas cluster
Show demo app

### Schema design in MongoDB (35)
go through slides

### Break
break 10 minutes

## Step 2

### Quick Tour of MongoDB Atlas (10)
Import sample data
Show database and app services

### Import application data (5)
Import into database "recipeBook" into collection "recipes" and "chefs" from the ./frontend/src/data files

### Connect Node.js backend (10)
Create a node.js backend from scratch
Create the two endpoints
Test with curl

### Connect front-end, and demo app (10)
Create the api.js file
Connect the data
Add fetch methods to Recipes and Chefs

### Enable Data API (5)
From the atlas UI

### Connect front-end to data api (10)
Change the api.js file to use the Data API
This will fail due to CORS

### (Stretch) Rewrite backend with Data API
If time permits

## Section 3

### Different ways to connect the a database (pros and cons of data API) (5)
Go through slides

### Create CRUD endpoints for the app in HTTPS endpoints (20)
Write function getRecipes, then create HTTPS endpoint
Connect backend
Do the same for getChefs
Stop backend, demo app

### Introduction to aggregation pipelines (5)
> **Note**
> A search index should be pre-created on the `movies` collection from `sample_mflix`

Build the `demoAggregation.js` pipeline on the `movies` collection.
Show how to export to code with driver syntax.

### Introduction to full-text search (5)
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

### Enable full-text search capabilities (15)
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

### Collection watch for real time statistics on visitors (10)
App authentication
Add rule
Copy App Id to config
Add useEffect to Stats page to watch for changes

### Create a Chart for data visualization (10)
Intro to Charts

### Host files on App Services (10)
npm run build
Upload files
Run from App Services

### Recap and conclusion (5)
Slides
