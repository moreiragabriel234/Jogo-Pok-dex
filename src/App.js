import React, { useState } from 'react';

import logo from './logo.svg';

function App() {

  // variaveis iniciais 
  const [id, setId] = useState(1);
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("bulbasaur");
  const [Hp, setHp] = useState("45");
  const [Atk, setAtk] = useState("45");
  const [Def, setDef] =  useState("32");
  const [vel, setVel] = useState("21");

  


  

  // pesquisa
  const pesquisar = e => {
    e.preventDefault();
    const pesquisar = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisar)
    .then(response => response.json())
    .then(data => {
      setId(data.id)
      setNome(data.name)
      setImg(data.sprites.other.dream_world.front_default)
      
      setHp(data.stats[0].base_stat)
      setAtk(data.stats[1].base_stat)
      setDef(data.stats[2].base_stat)
      setVel(data.stats[5].base_stat)

    })
  
  }

  return (
    <div className="App">
        <div className="container">

          <div className="row mt-5  align-items-center d-flex justify-content-center">
          <div className="card col-6">
   
          <div className="input-group mb-3  mt-3">
            {/* iniciar o evento de pesquisar */}
            <form onSubmit={pesquisar}>
              <input type="text" className="form-control" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="button-addon2" />
              <button className="btn btn-primary"  type="submit" id="button-addon2">Buscar</button> 
            </form>
          </div>

          <h5 className="card-title">{id}</h5> 

          <img src={img} className="card-img-top" alt="logo" />

          <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <h5 className="card-title">Saude: {Hp}</h5>
            <h5 className="card-title">Ataque: {Atk}</h5>
            <h5 className="card-title">Defesa: {Def}</h5>
            <h5 className="card-title">Velocidade: {vel}</h5>
            
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;
