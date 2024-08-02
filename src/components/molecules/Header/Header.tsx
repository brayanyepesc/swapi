import { HeaderProps } from "./types"

export const Header = ({ headerTitle, headerDescription }: HeaderProps) => {
    const defaultDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ratione perspiciatis fuga illum expedita distinctio nulla reiciendis laudantium maiores porro quaerat, similique eum eligendi magnam commodi reprehenderit repudiandae dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ut doloremque iste quae soluta. Fugiat, neque optio. Ipsa dolores voluptate quaerat quisquam. Est voluptas placeat, praesentium illum dolorem asperiores?"
    return (
        <header className="w-full p-5 shadow-lg rounded">
            <h1 className="text-xl text-center font-bold text-gray-500 mb-2">{headerTitle}</h1>
            <p className="text-sm">{headerDescription ? headerDescription : defaultDescription}</p>
        </header>
    )
}