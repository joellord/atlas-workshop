import React from "react";
import Card from "@leafygreen-ui/card";
import { H2, Body } from "@leafygreen-ui/typography";
import { css } from "@leafygreen-ui/emotion";

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

export default function ChefCard (props) {
  return  (
    <React.Fragment>
      <Card className={cardStyle}>
        <div className={titleArea}>
          <H2>{props.name}</H2>
        </div>
        <div className={imageArea}>
          <img className={thumbnailStyle} src={props.image} alt="Recipe Thumbnail" />
        </div>
        <div className={propsArea}>
          <Body>
            {props.socials.map(social => (
              <div>{social.network}: {social.username}</div>
            ))}
          </Body>
        </div>
      </Card>
    </React.Fragment>
  )
}