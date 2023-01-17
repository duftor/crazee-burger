

export default function ErrorPage() {
    // State
   

    // Comportements
    const handleClick = () => {
        console.log(" Go to /")
    }

    // Affichage
    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>Retourner à la page d'accueil</button>
        </div>
    )
}
