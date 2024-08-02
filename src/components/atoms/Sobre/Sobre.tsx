import { generarLaminas } from "../../../api/generarLaminas";
import useStore from "../../../store/store"
import { SobreProps } from "./types"

export const Sobre = ({ name }: SobreProps) => {
    const { aggLaminas, counter } = useStore();
    const openSobre = async() => {
        const laminasGeneradas = await generarLaminas();
        aggLaminas(laminasGeneradas);
    }
    const isBlockButton = counter < 60;
    return (
        <button disabled={isBlockButton} onClick={openSobre} className={`${isBlockButton ? 'bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'} w-full h-full p-4 text-center transition-all cursor-pointer text-white rounded`}>
            { name }
        </button>
    )
}