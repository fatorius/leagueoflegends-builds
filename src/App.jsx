import React from 'react'
import './App.css'
import LoadingSpinner from './comps/LoadingSpinner';

function Champions(props){
  const champs = [];

  for (const [key, value] of Object.entries(props.champions)) {
    champs.push(
      <div>
        <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${value.image.full}`}/>
        <p>{value.id}</p>
      </div>
    )
  }
  
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
      {champs}
    </div>
  )
}

function App() {  
  React.useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/14.5.1/data/pt_BR/champion.json")
    .then((obj)=>{return obj.json()})
    .then((obj)=>{setChampionsList(obj.data); setLoading(false);})
  }, []);

  const [loading, setLoading] = React.useState(true);
  const [championsList, setChampionsList] = React.useState([]);

  return (
    <>
      {
        loading ?
        <LoadingSpinner/> : 
        <Champions champions={championsList}/>
      }
    </>
  );
}

export default App
