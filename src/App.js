import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFlashcardPage from "./pages/CreateFlashcardPage";
import FlashcardDetailPage from "./pages/FlashcardDetailPage";
import MyFlashcardPage from "./pages/MyFlashcardPage";
import Navbar from "./components/Navbar";
// import store from "./app/store";

function App() {
  // console.log(store.getState());
  return (
    <BrowserRouter>
      <div className="w-full h-full bg-[#FFFAF4]">
        <Header />
        <div className="x-5 xl:px-32 container   mt-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateFlashcardPage />} />
            <Route path="/Myflashcard" element={<MyFlashcardPage />} />
            <Route
              path="/flashcarddetails/:groupId"
              element={<FlashcardDetailPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
// px-5 xl:px-32
