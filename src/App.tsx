import React from "react"
import "react-chatbot-kit/build/main.css"
import "./App.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { MainPage } from "./content/main/main.page"
import { ImpressumPage } from "./content/impressum/impressum.page"
import ReactMarkdown from "react-markdown"
import { PartnerPage } from "./content/partner/partner.page"
import { BeispielChallengePage } from "./content/beispielchallenge/beispielchallenge.page"
import { UnterstuetzenPage } from "./content/unterstuetzen/unterstuetzen.page"
import { TeilnehmenPage } from "./content/teilnehmen/teilnehmen.page"
import { HackathonPage } from "./content/hackathon/hackathon.page"
import { Navbar } from "./navbar/navbar"
import { ChallengesPage } from "./content/challenges/challenges-overview.page"
import { ChallengeDetails } from "./content/challenges/challenge-details"
import { CodeOfConductPage } from "./content/codeofconduct/codeofconduct.page"

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
                            <Route path="/" element={<MainPage />} />
                            <Route path="/hackathon" element={<HackathonPage />} />
                            <Route path="/challenges" element={<ChallengesPage />} />
                            <Route path="/challenge/:name" element={<ChallengeDetails />} />
                            <Route path="/impressum" element={<ImpressumPage />} />
                            <Route path="/partner" element={<PartnerPage />} />
                            <Route path="/unterstuetzen" element={<UnterstuetzenPage />} />
                            <Route path="/teilnehmen" element={<TeilnehmenPage />} />
                            <Route path="/beispiel_challenge" element={<BeispielChallengePage />} />
                            <Route path="/coc" element={<CodeOfConductPage />} />
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
