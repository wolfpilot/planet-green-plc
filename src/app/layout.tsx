// Types
import type { Metadata } from "next"

// Assets
import { Inter } from "next/font/google"

// Styles
import GlobalStyle from "@styles/global"

// Components
import StyledComponentsRegistry from "@lib/registry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        {children}
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
