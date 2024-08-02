import { generarLaminas } from "../../../api/generarLaminas";
import useStore from "../../../store/store"
import { SobreProps } from "./types"

export const Sobre = ({ name }: SobreProps) => {
    const { aggLaminas } = useStore();
    const openSobre = async() => {
        const laminasGeneradas = await generarLaminas();
        aggLaminas(laminasGeneradas);
    }
    return (
        <div onClick={openSobre} className="w-full h-full p-4 text-center hover:bg-gray-900 transition-all cursor-pointer bg-gray-800 text-white rounded">
            { name }
        </div>
    )
}