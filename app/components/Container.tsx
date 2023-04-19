'use client'

interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
        <main className='max-w-screen-2xl m-auto bg-white'>
            {children}
        </main>
    </main>
  )
}

export default Container