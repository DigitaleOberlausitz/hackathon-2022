import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import markdown from "./teilnehmen.md"

export const TeilnehmenPage: FC = () => <Markdown dynamicFileName={markdown} />
