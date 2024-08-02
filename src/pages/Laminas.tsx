import { Header } from "../components/molecules";
import { SobreList } from "../components/molecules/SobreList/SobreList";

export default function Laminas() {
    return (
        <main className="p-5 w-full max-h-screen">
            <Header
                headerTitle="Obtener láminas"
                headerDescription="Aquí puedes obtener láminas de la api de starwars"
            />
            <div className="grid grid-cols-2 gap-5 border-separate divide-x-2 mt-2 p-5 rounded shadow-lg w-full h-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center my-4">
                        <h2 className="text-gray-800 text-xl font-bold">Sobres disponibles</h2>
                        <p className="my-2 text-sm">Selecciona un sobre para generar las láminas</p>
                    </div>
                    <SobreList />
                </div>
                <div className="flex justify-center items-center">Hasta el momento no tienes láminas generadas</div>
            </div>
        </main>
    )
}