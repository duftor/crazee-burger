import { useState } from 'react';
import './App.css';

function App() {
    // State
    const [name, setName] = useState("");

    // Comportements
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        alert("Bonjour " + name)
        setName("")
    }

    // Affichage
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>

            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Entre votre prénom..."
                    onChange={handleChange}
                    required
                />

                <input type="submit" value="Accédez à votre espace" />
            </form>
        </div>
    );
}

export default App;
