import './global.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

const oxanium = Oxanium({
  weight: ['500', '600'], // Peso da fonte (no caso está como medium 500 e semibold 600)
  subsets: ['latin'], // carrega os caracteres mais comuns, assim deixa a font mais leve
  variable: '--font-oxanium', // variável que identifica a fonte criada
})

const montserrat = Montserrat({
  weight: ['400', '600'], // regular 400 semibold 600
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // No className do html está sendo importado as fontes criada
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
