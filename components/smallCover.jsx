import React from "react"
import NextImage from "./coverImage"

const SmallCover = ({ img, title }) => {
  console.log(img)
  return (
    <div className="uk-position-relative uk-height-medium uk-background-cover skew uk-height-correction uk-box-shadow-small">
      {img && <NextImage
        priority
        image={img}
        blurDataURL={`/${img.name}`}
        placeholder={"blur"}
        uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
      />}
      <h2 className="uk-light uk-position-center uk-text-large uk-margin-remove">
        {title}
      </h2>
    </div>
  )
}

export default SmallCover
