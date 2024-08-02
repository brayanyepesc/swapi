import { ISobre } from "../../../types/types"
import { sobresDisponiblesMock } from "../../../utils/constantes"
import { Sobre } from "../../atoms"

export const SobresList = () => {
    return (
        <ul className="h-full w-full grid grid-cols-2 gap-2">
            {
                sobresDisponiblesMock.map(({ id }: ISobre) => (
                    <li key={id}>
                        <Sobre />
                    </li>
                ))
            }
        </ul>
    )
}