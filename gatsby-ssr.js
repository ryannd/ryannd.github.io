import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Agora.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/VCR.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}