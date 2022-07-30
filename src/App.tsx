import React from "react"
import "react-chatbot-kit/build/main.css"
import "./App.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { MainPage } from "./main/main.page"
import { ImpressumPage } from "./impressum/impressum.page"
import ReactMarkdown from "react-markdown"
import { PartnerPage } from "./partner/partner.page"
import { BeispielChallengePage } from "./beispielchallenge/beispielchallenge.page"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <ReactMarkdown>_Digitale Oberlausitz e. V._ & _Second Attempt e. V._ präsentieren:</ReactMarkdown>
                    <Link to="/">
                        <h1>Hackathon 2022</h1>
                    </Link>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/impressum" element={<ImpressumPage />} />
                        <Route path="/partner" element={<PartnerPage />} />
                        <Route path="/beispiel_challenge" element={<BeispielChallengePage />} />
                    </Routes>
                </div>
                <div className="footer">
                    <Link to="/impressum">Impressum</Link>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
