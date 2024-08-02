import useStore from "../../../store/store";
import { LaminasList } from "../../molecules"

export const LaminasContainer = () => {
    const { laminas } = useStore();
    const laminasGeneradas = [
        ...(laminas.peliculas ?? []),
        ...(laminas.personajes ?? []),
        ...(laminas.naves ?? [])
    ];
    const hasLaminas: boolean = laminasGeneradas.length > 0;
    return (
        <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
            <div className="flex flex-col justify-center items-center my-4">
                <h2 className="text-gray-800 text-xl font-bold">Láminas generadas</h2>
                <p className="my-2 text-sm">Acá estarán disponibles las lámitas generadas que podrás añadir a tu álbum de colección</p>
            </div>
            <LaminasList laminasGeneradas={laminasGeneradas} hasLaminas={hasLaminas}/>
            {
                hasLaminas && (<button className="bg-blue-500 hover:bg-blue-700 text-white rounded p-1 flex self-end">Borrar láminas</button>)
            }
        </div>
    )
}