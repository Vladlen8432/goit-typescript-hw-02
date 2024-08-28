import ImageGalleryItem from "./ImageGalleryItem";
import css from "./ImageGallery.module.css";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}

interface ImageGalleryProps {
  images: Image[];
  onClick: (largeImageURL: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
