import { LaminasList } from "../../molecules"

export const LaminasContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
            <div className="flex flex-col justify-center items-center my-4">
                <h2 className="text-gray-800 text-xl font-bold">Láminas generadas</h2>
                <p className="my-2 text-sm">Acá estarán disponibles las lámitas generadas que podrás añadir a tu álbum de colección</p>
            </div>
            <LaminasList />
        </div>
    )
}