import React from "react"
import "react-chatbot-kit/build/main.css"
import "./App.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Main } from "./pages/main/main"
import ReactMarkdown from "react-markdown"
import { Navbar } from "./navbar/navbar"
import { ChallengesPage } from "./pages/challenges-overview/challenges-overview"
import { ChallengeDetails } from "./pages/challenge-details/challenge-details"
import Markdown from "./Markdown";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header dark">
                    <div className="title">
                        <ReactMarkdown>
                            _[Digitale Oberlausitz e. V.](https://www.digitale-oberlausitz.eu)_ & _[Second Attempt e.
                            V.](https://www.rabryka.eu/de/Verein.html)_ präsentieren:
                        </ReactMarkdown>
                        <Link to="/">
                            <img
                                id="hackathon_headline"
                                aria-label="Hackathon 2022"
                                alt="Hackathon 2022"
                                src="hackathon2022-schriftzug.svg"
                            />
                        </Link>
                    </div>
                </div>
                <div className="main">
                    <Navbar />

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/hackathon" element={<Markdown src={require("./content/hackathon.md")} />} />
                            <Route path="/challenges" element={<ChallengesPage />} />
                            <Route path="/challenge/:name" element={<ChallengeDetails />} />
                            <Route path="/results" element={<Markdown src={require("./content/results.md")} />} />
                            <Route path="/impressum" element={<Markdown src={require("./content/impressum.md")} />} />
                            <Route path="/partner" element={<Markdown src={require("./content/partner.md")} />} />
                            <Route path="/unterstuetzen" element={<Markdown src={require("./content/unterstuetzen.md")} />} />
                            <Route path="/teilnehmen" element={<Markdown src={require("./content/teilnehmen.md")} />} />
                            <Route path="/beispiel_challenge" element={<Markdown src={require("./content/beispielchallenge.md")} />} />
                            <Route path="/coc" element={<Markdown src={require("./content/codeofconduct.md")} />} />
                            <Route path="/techinfo" element={<Markdown src={require("./content/techinfo.md")} />} />
                        </Routes>
                    </div>
                </div>
                <div className="footer dark">
                    <div className="footer-content">
                        <Link to="/impressum">Impressum</Link>
                        <Link to="/coc">Code of Conduct</Link>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
