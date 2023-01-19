import { Link, useParams } from "react-router-dom";


export default function OrderPage() {
    // State
    const {username} = useParams()

    // Comportements

    // Affichage
    return (
        <div>
            <h1>
                Bonjour {username}
            </h1>
            <br />
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
