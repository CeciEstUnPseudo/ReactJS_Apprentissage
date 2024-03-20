
// Mon premier composant, mis dans son propre .jsx pour organisation
// On import aussi le CSS qui a AUSSI ete mis dans son propre file 
import './Header.css';
// On met aussi tout ce qui lui est relié  (.. = go up, go up 2 levels pour reactImg Go up twice to be in src, then dive into assets)
    import reactImg from '../../assets/react-core-concepts.png';

    // * Commencement d'elements dynamiques 

    const reactDescriptions = ['Fundamental', ' Crucial', 'Core', 'Important', 'Useful'];

    function generationNombreRandom(max){
        return Math.floor(Math.random()*(max+1));
    }
    // Dans l'element statique (Ici Header) {} pour mettre un element dynamique
    // 
    // * 
//
export default function Header(){

    // On peut aussi mettre le calcul directement dans les {} mais recommender comme ceci pour garder un code plus propre et comprehensible
    const description = reactDescriptions[generationNombreRandom(4)];
    

    // Make sure the first ( is on the same line as return so it takes everything inbetween the ()
    return(
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
    
            
            </p>
        </header>
    );
}