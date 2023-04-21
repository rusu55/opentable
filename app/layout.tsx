import './globals.css';
import { Nunito } from '@next/font/google';

import Container from './components/Container';
import NavBar from './components/NavBar';
import RegisterModal from './components/modals/RegisterModal';
export const metadata = {
  title: 'Go Electrical Us',
  description: 'Salut'
}


const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>     
        <RegisterModal />  
        <Container>          
          <NavBar />         
          {children}
        </Container>
      </body>
    </html>
  )
}
