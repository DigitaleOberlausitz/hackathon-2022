import React, { FC } from "react"
import Markdown from "../Markdown"

// @ts-ignore
import impressumMd from "./impressum.md"
import { Link } from "react-router-dom"

export const ImpressumPage: FC = () => <Markdown dynamicFileName={impressumMd} />
