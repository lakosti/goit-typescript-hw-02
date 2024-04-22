import { useEffect, useState } from "react";
import { requestProduct } from "../services/api";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Photo } from "./App.types";

const notify = () => toast.error("Not matching results ");

function App() {
  const [items, setItems] = useState<Photo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [btnLoadMore, setBtnLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [alt, setAlt] = useState<string>("");

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);

        const data = await requestProduct(searchQuery, page);

        if (data.total === 0) {
          notify();
        }

        setItems((prevState) => {
          return [...prevState, ...data.results];
        });
        setBtnLoadMore(data.total_pages > page);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataByQuery();
  }, [searchQuery, page]);

  const onSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    setIsLoading(false);
    setBtnLoadMore(false);
    setPage(1);
    setIsError(false);
    setItems([]);
  };
  const loadMoreItems = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (url: string, alt: string) => {
    setIsModalOpen(true);
    setAlt(alt);
    setUrl(url);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setAlt("");
    setUrl("");
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      <ImageGallery openModal={openModal} items={items} />
      {isError && <ErrorMessage />}
      {btnLoadMore && (
        <LoadMoreBtn handleMoreItems={loadMoreItems} disabled={isLoading}></LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      <ImageModal isModalOpen={isModalOpen} src={url} alt={alt} closeModal={closeModal} />
    </>
  );
}

export default App;
