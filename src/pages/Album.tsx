import { PelículasContainer, PersonajesContainer } from "../components/organisms";

export default function Album (){
    return (
        <main className="p-5 w-full space-y-10">
            <PelículasContainer />
            <PersonajesContainer />
        </main>
    )
}