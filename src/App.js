import { useState } from 'react';
import './App.css';

function App() {
    // State
    const [name, setName] = useState("");

    // Comportements
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (name)
            alert("Bonjour " + name)
    }

    // Affichage
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>

            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Entre votre prénom..."
                    onChange={handleChange}
                    required
                />
                
                <input type="submit" value="Accédez à votre espace" onClick={handleClick} />
            </form>
        </div>
    );
}

export default App;
