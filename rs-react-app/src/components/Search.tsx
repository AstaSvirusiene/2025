import { useEffect, useState } from "react";
import Section from "./Section";

export interface Character {
  characters: any;
  results: Results[]
}
export interface Results {
  image: string,
  name: string
}
function Search() {
  const url = "https://rickandmortyapi.com/api/character/?name="
  const [searchValue, setSearchValue] = useState<string>('');
  const [characters, setCharacters] = useState<Character>();

console.log("type", searchValue)
console.log("characters", characters)
const fetchData = () => {
 
    // if(searchValue.trim() === '') {
    //   setCharacters(undefined);
    //   return  
    // }
  fetch(url+searchValue)
    .then(response => response.json())
    .then(data => {
      setCharacters(data);
    })
 
}
if (characters) {
  return (
    <div>  
  <div>
    <h2>Search Rick and Morty Characters</h2>
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter character name..."
      />
      <button name="submit" type="submit" onClick={fetchData} >Search</button>
   </div>
  {characters && <Section characters={characters} results={[]} />}
  </div>)
}
return (
  <div>
    <h2>Search Rick and Morty Characters</h2>
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter character name..."
      />
      <button name="submit" type="submit" onClick={fetchData} >Search</button>
  </div>
  );
};  

export default Search
