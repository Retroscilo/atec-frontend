import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style, ...props }) => {
  const { url, alternativeText } = image

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <div>
      <NextImage
      {...props}
      loader={loader}
      layout="fill"
      objectFit="cover"
      src={url}
      alt={alternativeText || ""}
      className={style}
    />
    </div>
    
  )
}

export default Image
