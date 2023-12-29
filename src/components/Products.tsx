"use client"
import Image from "next/image"

export const Products = () => {

    const images = ['/products/prod1.jpg', '/products/prod2.jpg', '/products/prod3.jpg', '/products/prod4.jpg', '/products/prod5.jpg', '/products/prod6.jpg']

    return (
        <section className="container mx-auto py-14">
            <div className="mb-10">
                <h3 className="font-bold text-4xl text-center text-white ">Productos</h3>
                <hr className="max-w-[3.25rem] mx-auto" />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    images.map((image) => (
                        <div className="relative">
                            <div
                                className="absolute -z-1 bottom-0 top-0 w-full h-full
    bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"
                            >
                            </div>
                            <Image src={image} width={500} height={300} alt="Hola" className="w-full z-10 rounded-md hover:scale-105 transition-all ease-in" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
