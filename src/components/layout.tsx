import React from 'react';

type Props = {
  children: React.ReactNode
}


const Layout = ({children} : Props) => {
    const effectToggle = () => {
        let main = document.getElementsByTagName('main')[0];

        if(main.classList.contains('scanlines')) {
            main.classList.remove('scanlines');
            main.classList.add('no-scanlines')
        } else {
            main.classList.add('scanlines');
            main.classList.remove('no-scanlines');
        }
    }

    return (
        <>
            <main className="scanlines h-screen w-screen p-8">
                <h1 className="title text-white text-3xl md:text-7xl text-center">Ryan Dimaranan</h1>
                <div className="flex flex-col justify-center items-center md:justify-start md:mt-20 w-full h-full overflow-scroll md:px-32">
                    {children}
                    <a className="absolute bottom-0 pb-2 pt-1 w-full" onClick={() => effectToggle()}><p className="text text-red-500 text-center">TOGGLE EFFECT</p></a>
                </div>

            </main>
        </>
    )
}

export default Layout;