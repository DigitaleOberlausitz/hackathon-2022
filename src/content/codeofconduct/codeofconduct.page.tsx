import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import markdown from "./codeofconduct.md"

export const CodeOfConductPage: FC = () => <Markdown dynamicFileName={markdown} />
