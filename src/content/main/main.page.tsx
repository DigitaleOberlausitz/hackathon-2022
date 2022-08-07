import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import mainMd from "./main.md"

export const MainPage: FC = () => <Markdown dynamicFileName={mainMd} modifier="main" />
