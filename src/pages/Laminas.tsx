import { Header } from "../components/molecules";
import { LaminasContainer, SobresContainer } from "../components/organisms";

export default function Laminas() {
    return (
        <main className="p-5 w-full max-h-screen">
            <Header
                headerTitle="Obtener láminas"
                headerDescription="Aquí puedes obtener láminas de la api de starwars"
            />
            <div className="grid grid-cols-2 gap-5 border-separate divide-x-2 mt-2 rounded shadow-lg w-full h-full">
                <SobresContainer />
                <LaminasContainer />
            </div>
        </main>
    )
}