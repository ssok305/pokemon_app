import React from 'react';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

function Index(props){
    return(
        <div>
            <h1>See All The Pokemon!</h1>
            <ul>
            {props.pokemon.map((pokemon, index) => 
                <li key={index}>
                    <a href = {`/pokemon/${index}`}> 
                        {capitalizeFirstLetter(pokemon.name)} 
                    </a>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Index;