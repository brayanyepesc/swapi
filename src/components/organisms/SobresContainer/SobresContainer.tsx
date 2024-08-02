import { Counter } from "../../atoms"
import { SobresList } from "../../molecules"

export const SobresContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <div className="flex flex-col justify-center items-center my-4">
                <h2 className="text-gray-800 text-xl font-bold">Sobres disponibles</h2>
                <p className="my-2 text-sm">Selecciona un sobre para generar las láminas</p>
            </div>
            <SobresList />
            <Counter />
        </div>
    )
}