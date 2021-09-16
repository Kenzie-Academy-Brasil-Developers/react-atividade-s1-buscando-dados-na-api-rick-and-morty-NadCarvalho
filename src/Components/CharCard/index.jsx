const CharCard = ({name, status, image}) => {
    const isAlive = status === 'Alive' ? 'green': 'red'
    return(
<div className={isAlive}>
    <h3>{name}</h3>
    <img src={image} alt={name}></img>
</div>
    )
}

export default CharCard;