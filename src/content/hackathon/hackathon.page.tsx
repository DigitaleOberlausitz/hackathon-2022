import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import markdown from "./hackathon.md"

export const HackathonPage: FC = () => <Markdown dynamicFileName={markdown} />
