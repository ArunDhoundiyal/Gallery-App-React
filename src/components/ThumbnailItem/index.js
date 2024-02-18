import './index.css'

const ThumbnailItem = props => {
  const {imageArray, getImageUrl} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageArray
  const onClickImageButton = () => {
    getImageUrl(id)
  }
  return (
    <li>
      <button
        className="image-button"
        type="button"
        onClick={onClickImageButton}
      >
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default ThumbnailItem
