
import Header from './components/Header/Header.jsx';
import ConceptImportant from './components/Conceptes/ConceptImp1.jsx';
import ConceptImportantOptimiser from './components/Conceptes/ConceptImp2.jsx';
import TabBouton from './components/TABBoutons/TABBoutons.jsx';

// ** Un meilleur moyen de load des images 
// Chargement d'une image. Le src = "src/PATH" n'est pas super car quand on deploie notre code React, l'image peut etre perdu (Image file ignored during bundling). 

import componentsImg from './assets/components.png';

// Tjrs avec {}  dans code car element dynamique 
// ** 

// *** Autre facon de faire les props 
// Directement importer qqch de deja pre-built
import {CORE_CONCEPTS} from './data.js';
// *** 

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
        
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabBouton>Components</TabBouton>
          </menu>
        </section>
      </main>
      
    </div>
  );
}

export default App;
