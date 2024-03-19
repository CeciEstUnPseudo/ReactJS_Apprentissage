// Au lieu de faire 2x <li><button> dans le App.jsx, on en fait une fonction

// Ici on a {children} (Les choses entre les <> </>)
// Plus pratique que les labels (<div title = TITLE> </>) quand on en a 1 + quand on passe du code JSX comme valeur a un autre composant

// La methode des labels est mieux avec plusieurs props 


export default function boutons({children}){
    // props.children by default so always there. Its the text between the <>THE TEXT HERE</> Can be simple text or a complex structure
    return 
    (
        <li>
            <button>{children}</button>
        </li>
    );
}