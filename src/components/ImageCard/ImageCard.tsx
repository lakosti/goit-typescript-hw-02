import css from "./ImageCard.module.css";

interface Props {
  alt: string;
  src: {
    regular: string;
    small: string;
  };
  modalOpen: (url: string, alt: string) => void;
}

const ImageCard: React.FC<Props> = ({ alt, src, modalOpen }) => {
  return (
    <div className={css.imgWrap} onClick={() => modalOpen(src.regular, alt)}>
      <img className={css.imgItem} src={src.small} alt={alt} width={300} />
    </div>
  );
};

export default ImageCard;
