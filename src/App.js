import logo from './logo.svg';
import'./Styles/variables.css'
import './App.css';
import Clock from './components/clock';
import Card from './components/card';
import Header from './components/header';
import Footer from './components/footer';
import {useEffect, useState} from 'react'; 
import axios from'axios'





function App() {
  //On déclare une variable (restaurants) qui va contenir nos restaurants
  //On obtient une méthode permettent de mettre à jour les restaurants et de rafraichir de l'affichage
  const [restaurants, setRestaurants] = useState()

  // Méthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
  // le montage c'est l'apparition du composant a l'écran
useEffect(( )=>{
  //On crée une méthode pour récuperer les données provenant du backend (strapi)
  const loadData = async () =>{
    //On récupere les donnéesdu Backend avec la librairie Axios (c'est un appel HTTP)
    const response = await axios.get('http://localhost:1337/api/restaurants?populate=*')
    //On vérifie que l'appel de d'API s'est bien passé (status = 200 = "ok")
    if (response.status === 200){
      //Si l'ppel d'API est OK, on enregistre les restaurants dans la variable "restaurants"
    const data = response.data.data
    setRestaurants(data)
    }
  }
  //On appel la méthode cette precedement
  loadData()
}, [])

  return (
    <div className="App">
      <Header /> 
      <main className='content'>
      <Clock />
      {
        //On vérifie qu'on a bien les restaurants
        //On cée une boucle sur le tableau de restaurants grace a la fonction"map()"
        //On retourne pour chaque restaurant une Card pour afficher son contenu
        restaurants && restaurants.map(restaurant => {
          return (
            <Card restaurant ={restaurant}/>
            )
        })
      }
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
