import './globals.css';

import Container from './components/Container';
import NavBar from './components/NavBar';
import SearchHeader from './components/SearchHeader';
import Cards from './components/Cards';

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
        <Container>
          <NavBar />         
          {children}
        </Container>
      </body>
    </html>
  )
}
