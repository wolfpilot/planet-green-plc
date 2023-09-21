"use client"

// Global stylesheet
import { createGlobalStyle } from "styled-components"

// External stylesheets
import "swiper/css"
import "swiper/css/pagination"

// Styling
import { reset } from "./reset"
import { base } from "./base"

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${base};
`

export default GlobalStyle
