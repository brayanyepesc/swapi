import { LuMailOpen } from "react-icons/lu";
import { generarLaminas } from "../../../api/generarLaminas";
import useStore from "../../../store/store"
import Swal from "sweetalert2";

export const Sobre = () => {
    const { aggLaminas, counter, startCounter, laminas } = useStore();
    const peliculas = laminas.peliculas || [];
    const personajes = laminas.personajes || [];
    const naves = laminas.naves || [];
    const hasItems =
        (peliculas.length > 0) ||
        (personajes?.length > 0) ||
        (naves.length > 0);
    const openSobre = async () => {
        Swal.fire({
            title: '¡Sobre abierto!',
            text: 'Se han generado nuevas láminas, recuerda que para poder abrir nuevos sobres debes esperar 60 segundos y eliminar las láminas que ya tienes del carrito.',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
        startCounter();
        const laminasGeneradas = await generarLaminas();
        aggLaminas(laminasGeneradas);
    }
    const isBlockButton = counter < 60 || hasItems;
    return (
        <button disabled={isBlockButton} onClick={openSobre} className={`${isBlockButton ? 'bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'} w-full h-full p-4 text-center transition-all cursor-pointer text-white rounded flex justify-center items-center`}>
           <LuMailOpen className="mr-2 text-blue-500"/> Abrir
        </button>
    )
}