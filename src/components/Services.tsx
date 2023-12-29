import { BentoItems } from './BentoItems';

export const Services = () => {
    return (
        <section className="container mx-auto py-16">
            <h3 className="text-center text-4xl text-white font-bold text-pretty mb-2">Nuestros Servicios</h3>
            <hr className="max-w-[3.25rem] mx-auto" />
            <div className="grid grid-cols-4 gap-4 py-20">
                <BentoItems title="Sanidad y Bioseguridad" icons="user">
                    <p className='max-w-xl text-center text-sm'>Control y mantenimiento de la salud de organismos acuáticos en entornos como psiciculturas.</p>
                </BentoItems>
                <BentoItems title="Cotizar para tu proyecto acuícola" icons="rectangular">
                    <p className='max-w-xl text-center text-sm'>Identificamos, definimos y priorizamos los costos operacionales y administrativos ligados a tu proyecto acuícola.</p>
                </BentoItems>
                <BentoItems title="Proyectos de acuicultura" icons="fish">
                    <p className='max-w-xl text-center text-sm'>Somos especialistas en proyectos para el sector de la acuicultura, ofreciendo los servicios de gestión, manejo y consultoría de tus proyectos.</p>
                </BentoItems>
                <BentoItems title="Dias" icons="days">
                    <p className='max-w-xl text-center text-sm'>Descripción y diagnóstico del medio físico, biológico y socioeconómico de la zona del proyecto y de la ubicación de infraestructuras necesarias para el desarrollo del proyecto.</p>
                </BentoItems>

            </div>
        </section>
    )
}
