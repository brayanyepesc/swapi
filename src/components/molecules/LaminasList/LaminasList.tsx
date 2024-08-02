import useStore from "../../../store/store"
import { LaminasListItem } from "../LaminasListItem/LaminasListItem"

export const LaminasList = () => {
    const { laminas } = useStore();
    const laminasGeneradas = [
        ...(laminas.peliculas ?? []),
        ...(laminas.personajes ?? []),
        ...(laminas.naves ?? [])
    ];
    return (
        <>
            <ul className="h-full w-full grid grid-cols-2 gap-2">
                {
                    laminasGeneradas.length > 0 ? laminasGeneradas.map((_, index) => (
                        <li key={index}>
                            <LaminasListItem />
                        </li>
                    )) : <li className="text-blue-500 text-sm text-center">Aún no hay láminas generadas</li>
                }
            </ul>
        </>
    )
}