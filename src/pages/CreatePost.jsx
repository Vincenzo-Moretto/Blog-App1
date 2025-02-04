import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const CreatePost = () => {
  // Corretta la destrutturazione useState per `cat` e `cats`
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const deleteCategory = (category) => {
    // Rimuove la categoria selezionata
    const updatedCats = cats.filter((c) => c !== category);
    setCats(updatedCats);
  };

  const addCategory = () => {
    if (cat.trim() !== "" && !cats.includes(cat)) {
      // Aggiunge la nuova categoria se non è vuota o duplicata
      setCats([...cats, cat]);
      setCat(""); // Resetta il campo input dopo l'aggiunta
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input type="text" placeholder="Enter post title" className="px-4 py-2 outline-none" />
          <input type="file" className="px-4" />

          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white w-12 h-12 flex items-center justify-center font-semibold cursor-pointer rounded-full"
              >
                Add
              </div>
            </div>

            {/* categories */}
            <div className="flex px-4 mt-3 flex-wrap">
              {cats.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p>{c}</p> {/* Mostra la categoria dinamicamente */}
                  <p
                    onClick={() => deleteCategory(c)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <textarea rows={15} cols={30} className="px-4 py-2 outline-none" placeholder="Enter post description" />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
