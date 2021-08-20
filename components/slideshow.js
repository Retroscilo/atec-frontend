import NextImage from "./image"

const Slideshow = ({ images }) => {
  return (
    <div uk-slideshow="autoplay: true; animation: pull">
      <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
        <ul className="uk-slideshow-items">
          {images && images.map(image => (
              <li key={image.id}>
                <NextImage image={image} />
                <div className="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom">
                  <h4 className="uk-margin-remove">{image.caption}</h4>
                </div>
              </li>
          ))}
        </ul>
        <a className="uk-position-center-left uk-position-medium uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
        <a className="uk-position-center-right uk-position-medium uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
      </div>
    </div>
  )
}

export default Slideshow
