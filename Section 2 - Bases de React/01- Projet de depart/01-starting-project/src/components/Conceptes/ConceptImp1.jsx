
// "Props" ou on peut lui inclure des elements differents lorsqu'on reutilise cet element dynamique (props) = les parametres comme une fonction normale.
// (props) = les parametres comme une fonction normale. Difference = Fonction normale a 1 pour chaque parametre, dans React, c'est 1 objet 
export default function ConceptImportant(props){
    return (
        <li>
            <img src = {props.image} alt = {props.title}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}