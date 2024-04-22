import Modal from "react-modal";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    background: "none",
    border: "none",
    padding: 0,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(20, 42, 57, 0.858)",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<Props> = ({ isModalOpen, closeModal, src, alt }) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
