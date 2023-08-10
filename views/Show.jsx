import React from 'react';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    display: 'grid',
    fontSize: '15px',
    justifyContent: 'space-evenly',
    gridTemplateColumns: 'repeat(3, 1fr)'
    
    };
const imgStyle = {
    borderRadius: '5px',
    width: 'auto',
    height: '250px'
}

const textStyle = {
    marginTop: '10px',
    marginRight: '100px'
}
    


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const changeToJpg = (url) => {
    return url + '.jpg';
}
function Show(props){
    return(
        <div>
            <h1>Gotta Catch 'Em All!</h1>
    
            <ul style={myStyle}>
            {props.pokemon.map((pokemon, index) => 
                <li key={index}>
                    <h2 style={textStyle}>{props.pokemon.name}</h2>
                    <a href = {`/pokemon/${index}`}>
                        <div >
                        <img style={imgStyle}  src={changeToJpg(pokemon.img)} alt={pokemon.name}/>
                        </div> 
                        {capitalizeFirstLetter(pokemon.name)} 
                    </a>
                </li>
            )}
            </ul>
            <a href={'/pokemon'}>Back</a>
        </div>
    )
}

export default Show;