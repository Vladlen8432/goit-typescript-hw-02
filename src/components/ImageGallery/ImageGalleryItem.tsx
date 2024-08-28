import css from "./ImageGallery.module.css";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}

interface ImageGalleryItemProps {
  image: Image;
  onClick: (largeImageURL: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onClick,
}) => {
  return (
    <li
      className={css.galleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="IMG" className={css.galleryImage} />
    </li>
  );
};

export default ImageGalleryItem;
