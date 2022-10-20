import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import techinfoMd from "./techinfo.md"

export const TechinfoPage: FC = () => <Markdown dynamicFileName={techinfoMd} />
