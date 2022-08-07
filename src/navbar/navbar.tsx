import React, { FC } from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

export const Navbar: FC = () => (
    <div className="navbar">
        <ul>
            <li>
                <Link to="/">Allgemein</Link>
            </li>
            <li>
                <Link to="/hackathon">Was ist ein Hackathon?</Link>
            </li>
            <li>
                <Link to="/teilnehmen">Teilnehmen</Link>
            </li>
            <li>
                <Link to="/partner">Challenge einreichen</Link>
                <ul>
                    <li>
                        <Link to="/beispiel_challenge">Beispiel-Challenge</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/unterstuetzen">Unterstützen</Link>
            </li>
        </ul>
    </div>
)
