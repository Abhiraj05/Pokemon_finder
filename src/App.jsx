import { useState } from "react";
import Spinner from "./Spinner.jsx";

function App() {
  //variables & usestate
  let pokemon_name, image_url, pokemon_sound;
  const [number, setnumber] = useState();
  const [name, setname] = useState("");
  const [rank, setrank] = useState("");
  const [sound, setsound] = useState("");
  const [spinnervisbility, setspinner] = useState(false);
  const [image, setimage] = useState(
    "https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
  );

//data fetching
  function btn() {
    if (!isNaN(number)) {
      setspinner(true);
     const set_interval= setInterval(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((data) => {
        data.json().then((converted_data) => {
          const details_object = converted_data["results"][number];
          fetch(details_object["url"]).then((url) => {
            url.json().then((url_converted) => {
              pokemon_name = url_converted["name"];
              pokemon_sound = url_converted["cries"]["latest"];
              image_url =
                url_converted["sprites"]["other"]["dream_world"][
                  "front_default"
                ];
              setrank(`rank : ${number}`);
              setname(`pokemon name : ${pokemon_name}`);
              setsound(pokemon_sound);
              setimage(image_url);
              setspinner(false);
              clearInterval(set_interval)
            });
          });
        });
      });
      }, 3000);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src={image} alt="" className="md:w-80 md:h-80 w-56 h-56  " />
          </div>
          <div className="mt-10">
            <h3 className="text-white uppercase font-bold md:text-lg text-lg">
              {rank}
            </h3>
            <h1 className="text-white uppercase font-bold md:text-2xl text-xl">
              {name}
            </h1>
            <audio src={sound} autoPlay></audio>
          </div>
          <div className="mt-9">
            <input
              className=" focus:outline-none md:h-14 md:w-72 text-base text-center font-bold border-2 h-12 w-72 sm:placeholder:text-xs rounded-md border-yellow-300 bg-slate-600 text-yellow-300 placeholder:font-medium md:text-lg md:placeholder:text-lg  placeholder:text-gray-400 placeholder:capitalize"
              type="text"
              placeholder="enter numbers between 0-150"
              id="number"
              onChange={(event) => setnumber(event.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              onClick={btn}
              className="text-white font-sans bg-red-500 hover:bg-red-600 md:p-3 uppercase md:text-base rounded-md font-bold text-sm p-3 w-28 h-12 md:w-28 md:h-14 border-2 border-slate-200 "
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
      <div>{spinnervisbility && <Spinner />}</div>
    </>
  );
}

export default App;
