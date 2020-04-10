import React from "react";

const PlayerGrid = props => {
    return(
        props.players.map(e => <div key={e.name}class="PlayerCard"><p>Name: <span>{e.name}</span></p> <p>Country: {e.country}</p> <p>Searches: {e.searches}</p></div>)
    )
}

export default PlayerGrid;