import React, { FC } from "react"
import Markdown from "../Markdown"

// @ts-ignore
import markdown from "./unterstuetzen.md"

export const UnterstuetzenPage: FC = () => <Markdown dynamicFileName={markdown} />
