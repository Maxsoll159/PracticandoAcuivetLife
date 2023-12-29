import Image from "next/image"

export const Header = () => {
    return (
        <header id="header-nav" className="fixed w-screen py-3 z-50 top-0 px-8 lg:px-0">
            <div className="flex max-w-7xl mx-auto items-center justify-between">
                <a href="/" className="col-span-1">
                <Image src="/products/Logo.png" alt="Logo" width={70} height={70} />
                </a>
                <nav className="col-span-1 justify-self-center">
                    <ul className="flex gap-5 text-white font-semibold">
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/info">Inicio</a></li>
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/archivo">Nostros</a></li>
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/archivo">Productos</a></li>
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/archivo">Servivios</a></li>
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/archivo">Privacidad</a></li>
                        <li><a className="hover:underline underline-offset-4 transition-all ease-in" href="/archivo">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
