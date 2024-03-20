// Au lieu de faire 2x <li><button> dans le App.jsx, on en fait une fonction

// Ici on a {children} (Les choses entre les <> </>)
// Plus pratique que les labels (<div title = TITLE> </>) quand on en a 1 + quand on passe du code JSX comme valeur a un autre composant

// La methode des labels est mieux avec plusieurs props 


export default function Boutons({children, onSelect}){
    // props.children by default so always there. Its the text between the <>THE TEXT HERE</> Can be simple text or a complex structure

    // Built-in react attribut to button onClick (Lots of on(Something)) instead of the whole addEventListener('click')

    //Function built in a function, only useable inside the parent function (like we do with variables). Common practice to call function that deal with on(Something) handle(ThingItHandles) (on for smt that will eventually be trigged by some event)
    /*
    function handleClick(){
        console.log("Element was clicked!");
    }
    */


    return (
        <li>
            
            <button onClick={onSelect}> {children} </button>
        </li>
    );
}