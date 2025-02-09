import { Character, Results } from './Search';

export default function Card(props: Character) {
  console.log(props);
  return (
    <section>
      {props.characters.results.map((character: Results) => (
        <div key={character.name} className="flex-container">
          <div key={character.image} className="flex-item">
            <h2>{character.name}</h2>
            <img src={character.image} />
          </div>
        </div>
      ))}
    </section>
  );
}
