import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import markdown from "./beispielchallenge.md"

export const BeispielChallengePage: FC = () => <Markdown dynamicFileName={markdown} />
