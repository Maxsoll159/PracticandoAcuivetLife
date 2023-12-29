

export const Video = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="container px-5 md:px-20 absolute text-white top-10 z-10 left-0 right-0 mx-auto gap-5 flex items-center flex-col justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-bold">AcuivetLife</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-center">Porque su bienestar es nuestra prioridad </h2>
        <hr className="max-w-[3.25rem] mx-auto" />
        <p className="text-center text-base md:text-xl font-semibold">En Acuivetlife aspiramos a ser líderes en el mercado de la acuicultura, reconocidos por nuestra excelencia, compromiso con la sostenibilidad y contribución al desarrollo de una industria acuícola más responsable y próspera.</p>
        <button className="font-bold text-lg p-3 mt-6 hover:scale-105 transition-all ease-out border rounded-lg bg-white text-[#030f23]">Saber Mas</button>
      </div>
      <video style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)" }} className="w-full object-cover object-top h-full" src="/videos/video1.webm" autoPlay muted loop></video>
      <video className="absolute -bottom-48 blur-3xl -z-40" src="/videos/video1.webm" autoPlay muted loop></video>
    </div>
  )
}
