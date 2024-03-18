// * Commencement d'elements dynamiques 

const reactDescriptions = ['Fundamental', ' Crucial', 'Core', 'Important', 'Useful'];

function generationNombreRandom(max){
    return Math.floor(Math.random()*(max+1));
}
// Dans l'element statique (Ici Header) {} pour mettre un element dynamique
// 
// * 

// ** Un meilleur moyen de load des images 

// Chargement d'une image. Le src = "src/PATH" n'est pas super car quand on deploie notre code React, l'image peut etre perdu (Image file ignored during bundling). 

import reactImg from './assets/react-core-concepts.png';
// Tjrs avec {}  dans code car element dynamique 
// ** 

// Mon premier composant
function Header(){

  // On peut aussi mettre le calcul directement dans les {} mais recommender comme ceci pour garder un code plus propre et comprehensible
  const description = reactDescriptions[generationNombreRandom(4)];
  
  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!

      
    </p>
  </header>);
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
