import React from "react";
import Card from "@leafygreen-ui/card";
import { H2, Body } from "@leafygreen-ui/typography";
import { css } from "@leafygreen-ui/emotion";
import { Link } from "react-router-dom";

const cardStyle = css`
  display: grid;
  grid-template-areas: "title title title" 
                       "image props props"
`

const titleArea = css`
  grid-area: title;
  margin-bottom: 10px;
`

const imageArea = css`
  grid-area: image;
`

const propsArea = css`
  grid-area: props;
`

const thumbnailStyle = css`
  width: 100px;
  height: 100px;
`

export default function RecipeCard (props) {
  return  (
    <React.Fragment>
      <Card className={cardStyle}>
        <div className={titleArea}>
          <H2>{props.title}</H2>
        </div>
        <div className={imageArea}>
          <img className={thumbnailStyle} src={props.image} alt="Recipe Thumbnail" />
        </div>
        <div className={propsArea}>
          <Body>
            Servings: {props.servings}<br/>
            Prep Time: {props.prepTime}<br/>
            Cook Time: {props.cookTime}<br />
            Author: {props.author.name}<br/>
            {props.withLink && 
              <Link to={`/recipe/${props._id}`}>See full recipe</Link>
            }
          </Body>
        </div>
      </Card>
    </React.Fragment>
  )
}