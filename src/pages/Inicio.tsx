import StarwarsImage from "../assets/images/CharactersImage.webp"

export default function Inicio (){
    return (
        <main className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
                <img src={StarwarsImage} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="text-4xl font-bold text-center text-blue-500">Star Wars - Brayan</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore sed, aliquam deleniti odit autem possimus itaque quos et temporibus, dolorem sint est explicabo aut dicta maxime ipsam minus veritatis?</p>
                <div className="w-full flex justify-center items-center gap-4 px-20">
                    <a className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700 w-full text-center" href="">Web</a>
                    <a className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700 w-full text-center" href="">Github</a>
                    <a className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700 w-full text-center" href="">LinkedIn</a>
                </div>
            </div>
        </main>
    )
}