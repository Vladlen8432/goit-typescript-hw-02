import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const apiKey = "40510236-388f5567c4a0a863bef97b410";
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  const fetchImages = useCallback(async () => {
    const params = {
      key: apiKey,
      q: searchQuery,
      page: page,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
    };

    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl, { params });
      const newImages: Image[] = response.data.hits;
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, apiUrl, searchQuery, page]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchImages();
    }
  }, [fetchImages, searchQuery]);

  const handleSearch = (query: string) => {
    if (query.trim() === searchQuery.trim()) {
      return;
    }

    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImageURL: string) => {
    setIsModalOpen(true);
    setModalImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div style={{ padding: "10px 10px 10px 10px" }}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          image={modalImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
