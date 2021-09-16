import CharCard from "../CharCard"

const Characters = ({list}) => {

    return(
<div>
    <h3>Meus personagens</h3>
    <ul className="my-characters">
      {list.map(character =>
        <li key={character.id}>
          <CharCard 
          name={character.name} 
          status={character.status} 
          image={character.image}/>
        </li>
      )}

    </ul>

</div>
    );
}

export default Characters;