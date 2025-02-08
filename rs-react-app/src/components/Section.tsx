import { Character, Results } from "./Search";

export default function Section(props : Character) {
    console.log(props)
    return (
        <section className="half-wide">
        {props.characters.results.map((character: Results)=>
            <div className="flex-container">
                <div className="flex-item">
                    <h2>{character.name}</h2>
                    <img src={character.image} />
                </div>
            </div>)}
        </section>
    );
}