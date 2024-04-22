import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

interface Props {
  items: Photo[] | null;
  openModal: (url: string, alt: string) => void;
}

const ImageGallery: React.FC<Props> = ({ items, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {items !== null &&
        Array.isArray(items) &&
        items.map((item) => {
          return (
            <li key={item.id} className={css.galleryItem}>
              <ImageCard alt={item.alt_description} src={item.urls} modalOpen={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
