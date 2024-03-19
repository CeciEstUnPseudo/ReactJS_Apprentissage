// Version optimiser Les {} dans () deconstruisent les parametres dans l'ordre de construction (voir data.js)
export default function ConceptImportantOptimiser({image, title, description}){
    return (
        <li>
            <img src = {image} alt = {title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}