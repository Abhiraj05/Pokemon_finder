import { useState } from "react";

function App() {
  let pokemon_name, image_url;
  const [number, setnumber] = useState();
  const [name, setname] = useState("");
  const [rank, setrank] = useState("");
  const [image, setimage] = useState(
    "https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
  );

  function btn() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((data) => {
      data.json().then((converted_data) => {
        const details_object = converted_data["results"][number];
        fetch(details_object["url"]).then((url) => {
          url.json().then((url_converted) => {
            pokemon_name = url_converted["name"];
            image_url =
              url_converted["sprites"]["other"]["dream_world"]["front_default"];
            setrank(`rank : ${number}`);
            setname(`pokemon name : ${pokemon_name}`);
            setimage(image_url);
          });
        });
      });
    });
  }
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src={image} alt="" className="md:w-80 md:h-80 w-48 h-48  " />
          </div>
          <div className="mt-10">
            <h3 className="text-white uppercase font-bold md:text-lg text-base">
              {rank}
            </h3>
            <h1 className="text-white uppercase font-bold md:text-2xl" text-lg>
              {name}
            </h1>
          </div>
          <div className="mt-9">
            <input
              className=" focus:outline-none md:h-14 md:w-72  text-center font-bold border-2 h-10 w-60 sm:placeholder:text-xs rounded-md border-yellow-300 bg-slate-600 text-yellow-300 placeholder:font-medium md:text-lg md:placeholder:text-lg  placeholder:text-gray-400 placeholder:capitalize"
              type="text"
              placeholder="enter numbers between 0-150"
              id="number"
              onChange={(event) => setnumber(event.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              onClick={btn}
              className="text-white font-sans bg-red-500 md:p-3 uppercase md:text-base rounded-md font-bold text-xs p-3 md:w-28 md:h-14 border-2 border-slate-200"
            >
              get data
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="font-sans font-semibold md:text-base text-sm text-white capitalize mb-9">
          made with &#10084; by abhiraj
        </p>
      </div>
    </>
  );
}

export default App;
