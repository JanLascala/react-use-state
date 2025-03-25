import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// Import data
import languages from "./data/languages";

function App() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    return (
        <>
            <h1 className="title">Learn web development</h1>
            <div>
                {languages.map((language) => (
                    <button className="btn" key={language.id} onClick={() => setSelectedLanguage(language)}>
                        {language.name}
                    </button>
                ))}
                <div className="container">
                    <h2>{selectedLanguage.title}</h2>
                    <p className="paragraph">{selectedLanguage.description}</p>
                </div>

            </div>
        </>
    )
};

export default App
