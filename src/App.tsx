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

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <ReactMarkdown>
                        _[Digitale Oberlausitz e. V.](https://www.digitale-oberlausitz.eu)_ & _[Second Attempt e.
                        V.](https://www.rabryka.eu/de/Verein.html)_ präsentieren:
                    </ReactMarkdown>
                    <Link to="/">
                        <img
                            id="hackathon_headline"
                            aria-label="Hackathon 2022"
                            alt="Hackathon 2022"
                            src="https://raw.githubusercontent.com/DigitaleOberlausitz/grafiken/master/Plakate/hackathon/2022/hackathon2022-schriftzug.svg"
                        />
                    </Link>
                </div>
                <div className="main">
                    <Navbar />

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/hackathon" element={<HackathonPage />} />
                            <Route path="/impressum" element={<ImpressumPage />} />
                            <Route path="/partner" element={<PartnerPage />} />
                            <Route path="/unterstuetzen" element={<UnterstuetzenPage />} />
                            <Route path="/teilnehmen" element={<TeilnehmenPage />} />
                            <Route path="/beispiel_challenge" element={<BeispielChallengePage />} />
                        </Routes>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/impressum">Impressum</Link>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
