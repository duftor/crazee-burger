

export default function OrderPage() {
    // State

    // Comportements
    const handleClick = () => {
        console.log("Go to /");      
    }

    // Affichage
    return (
        <div>
            <h1>
                Bonjour 
            </h1>
            <br />
            <button onClick={handleClick}>Déconnexion</button>
        </div>
    )
}
