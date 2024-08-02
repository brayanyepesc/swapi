import { LaminasListItem } from "../LaminasListItem/LaminasListItem"

export const LaminasList = ({ laminasGeneradas, hasLaminas }: { laminasGeneradas: any[], hasLaminas: boolean }) => {
    
    return (
        <>
            <ul className="h-full w-full grid grid-cols-2 gap-2">
                {
                    hasLaminas ? laminasGeneradas.map((lamina, index) => (
                        <li key={index}>
                            <LaminasListItem lamina={lamina}/>
                        </li>
                    )) : <li className="text-blue-500 text-sm text-center">Aún no hay láminas generadas</li>
                }
            </ul>
        </>
    )
}