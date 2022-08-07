import React, { FC } from "react"
import Markdown from "../../Markdown"

// @ts-ignore
import partnerMd from "./partner.md"

export const PartnerPage: FC = () => <Markdown dynamicFileName={partnerMd} />
