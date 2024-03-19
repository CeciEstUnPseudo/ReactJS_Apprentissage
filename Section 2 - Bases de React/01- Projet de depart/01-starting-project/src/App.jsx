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
import componentsImg from './assets/components.png';

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

// "Props" ou on peut lui inclure des elements differents lorsqu'on reutilise cet element dynamique (props) = les parametres comme une fonction normale.
// (props) = les parametres comme une fonction normale. Difference = Fonction normale a 1 pour chaque parametre, dans React, c'est 1 objet 
function ConceptImportant(props){
  return (
    <li>
      <img src = {props.image} alt = {props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
// Version optimiser Les {} dans () deconstruisent les parametres dans l'ordre de construction (voir data.js)
function ConceptImportantOptimiser({image, title, description}){
  return (
    <li>
      <img src = {image} alt = {title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
// *** Autre facon de faire les props 
// Directement importer qqch de deja pre-built
import {CORE_CONCEPTS} from './data.js';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>

        <section id = "core-concepts">
        <h2>Concepte Props (elements dynamiques customisables) </h2>
        <ul>

          <ConceptImportant 
          title = "Text of a title prop" 
          description = "Text of a description prop" 
          image = {componentsImg}
          > </ConceptImportant>

          <ConceptImportant
          title = "Seulement un titre"
          > </ConceptImportant>

          <ConceptImportant
          description = "Seulement une description"
          > </ConceptImportant>

        </ul>
          
        </section>

        <section id = "core-concepts">
        <h2>Concepte props avec qqch d'importer </h2>
        <ul>

          <ConceptImportant 
          title = {CORE_CONCEPTS[0].title}
          description = {CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          > </ConceptImportant>

          <ConceptImportant 
          title = {CORE_CONCEPTS[1].title}
          description = {CORE_CONCEPTS[1].description}
          image = {CORE_CONCEPTS[1].image}
          > </ConceptImportant>

          <ConceptImportant 
          title = {CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}
          > </ConceptImportant>

          <ConceptImportant 
          title = {CORE_CONCEPTS[3].title}
          description = {CORE_CONCEPTS[3].description}
          image = {CORE_CONCEPTS[3].image}
          > </ConceptImportant>

        </ul>
          
        </section>

        <section id = "core-concepts">
        <h2>Concepte props avec importation (OPTIMISER) </h2>
        <ul>

          <ConceptImportant 
          {...CORE_CONCEPTS[0]}
          > </ConceptImportant>

          <ConceptImportant 
          {...CORE_CONCEPTS[1]}
          > </ConceptImportant>

          <ConceptImportant 
          {...CORE_CONCEPTS[2]}
          > </ConceptImportant>

          <ConceptImportant 
          {...CORE_CONCEPTS[3]}
          > </ConceptImportant>

        </ul>
          
        </section>

        <section id = "core-concepts">
        <h2>Concepte props avec importation (OPTIMISER) + element dynamique optimiser </h2>
        <ul>

          <ConceptImportantOptimiser 
          {...CORE_CONCEPTS[0]}
          > </ConceptImportantOptimiser>

          <ConceptImportantOptimiser
          {...CORE_CONCEPTS[1]}
          > </ConceptImportantOptimiser>

          <ConceptImportantOptimiser 
          {...CORE_CONCEPTS[2]}
          > </ConceptImportantOptimiser>

          <ConceptImportantOptimiser
          {...CORE_CONCEPTS[3]}
          > </ConceptImportantOptimiser>

        </ul>
          
        </section>
      </main>
      
    </div>
  );
}

export default App;
