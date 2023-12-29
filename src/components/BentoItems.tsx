import { FaFish, FaRectangleList, FaSeedling, FaUserShield } from "react-icons/fa6";
interface Props {
    title: string,
    children: React.ReactNode,
    icons: string
}
export const BentoItems = ({ title, children, icons }: Props) => {

    const objectIcos:any = {
        'user': <FaUserShield size={45} className="mx-auto" />,
        'rectangular': <FaRectangleList size={45} className="mx-auto" />,
        'fish': <FaFish size={45} className="mx-auto" />,
        'days': <FaSeedling size={45} className="mx-auto" />
    }

    return (
        <div
            className="bg-[#40c2da] hover:scale-105 transition-all ease-out text-white relative overflow-hidden rounded-xl backdrop-blur-md border border-black/10 shadow-xl"
        >
            <div className="select-none flex flex-col gap-1 p-6 z-20 justify-end ">
                {objectIcos[icons]}
                <h3 className="font-bold text-center text-balance text-white text-lg my-3">{title}</h3>
                {children}
            </div>
        </div>
    )
}
