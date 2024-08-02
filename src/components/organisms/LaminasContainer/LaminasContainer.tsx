import useStore from "../../../store/store";
import { LaminasList } from "../../molecules"

export const LaminasContainer = () => {
    const { laminas, resetLaminas } = useStore();
    const laminasGeneradas = [
        ...(laminas.peliculas ?? []),
        ...(laminas.personajes ?? []),
        ...(laminas.naves ?? [])
    ];
    const hasLaminas: boolean = laminasGeneradas.length > 0;
    const deleteLaminas = () => { 
        resetLaminas();
    }
    return (
        <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
            <div className="flex flex-col justify-center items-center my-4">
                <h2 className="text-gray-800 text-xl font-bold">Láminas generadas</h2>
                <p className="my-2 text-sm">Acá estarán disponibles las lámitas generadas que podrás añadir a tu álbum de colección</p>
            </div>
            <LaminasList laminasGeneradas={laminasGeneradas} hasLaminas={hasLaminas}/>
            {
                hasLaminas && (<button onClick={deleteLaminas} className="bg-blue-500 w-full mt-2 text-center hover:bg-blue-700 text-white rounded p-2">Borrar láminas</button>)
            }
        </div>
    )
}