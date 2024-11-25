import AlbumList from "../Components/Gallery/AlbumList";
import VideoGallery from "../Components/VideoGallery/VideoGallery";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
export default function Gallerys() {

  
  return (
    <>
      <Navbar />
      <AlbumList />
      <VideoGallery/>
      <Footer />
    </>
  );
}
