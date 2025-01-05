# Pokémon Finder

This is a simple web application where users can input a number between **1 and 151** to get details about a Pokémon, including its **rank**, **name**, and **sound**. The application fetches data using the [PokéAPI](https://pokeapi.co/) and plays the Pokémon's cry for a more immersive experience.  

The project is built using **React.js** for the frontend and styled with **Tailwind CSS**.

---

## Features
- Enter a number between **1 and 151** to retrieve Pokémon details.
- Displays:
  - **Rank** (Pokémon's position in the Pokédex).
  - **Name** of the Pokémon.
  - **Cry sound** of the Pokémon.
- Clean, responsive design using **Tailwind CSS**.
- Utilizes the [PokéAPI](https://pokeapi.co/) for fetching Pokémon data.

---

## How to Run Locally

### Prerequisites
- **Node.js** and **npm** installed on your system.
- Basic understanding of React and Tailwind CSS (optional).


  ### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Abhiraj05/pokemonapi
   cd pokemonapi
   ```

### Install dependencies:
npm install


### Start the development server:
npm start
Open the app in your browser at http://localhost:3000.

### API Used
PokéAPI
URL: https://pokeapi.co/api/v2/pokemon/?limit=151
The app fetches Pokémon details from this API, including their names and sounds.
