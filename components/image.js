import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style, ...props }) => {
  const { url, alternativeText } = image

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      {...props}
      className={style}
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
