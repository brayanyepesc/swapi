import { LuEye, LuStar } from "react-icons/lu";
import useStore from "../../../store/store";
import { useInfoLamina } from "../../../utils/extractInfoOfLamina"
import { isSpecial } from "../../../utils/isSpecial";
import { LaminasListItemProps } from "./types"
import { isInAlbum } from "../../../utils/isInAlbum";

export const LaminasListItem = ({ lamina }: LaminasListItemProps) => {
  const { aggLaminaAlAlbum, album } = useStore();
  const infoLamina = useInfoLamina({ lamina });
  const handleAddLamina = () => {
    aggLaminaAlAlbum(lamina);
  }
  const special = isSpecial(infoLamina.id, infoLamina.category);
  const laminaIsInAlbum = isInAlbum(lamina, album)
  return (
    <div className="w-full space-y-1 h-full text-center border p-2 transition-all text-white rounded relative">
      {
        special && (
          <div className="rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-full bg-red-500 text-white p-1">
          <LuStar />
        </div>
        )
      }
      {
        Object.entries(infoLamina).map(([key, value], index) => (
          <div key={index} className="rounded text-gray-500 shadow-sm p-1 flex justify-between items-center">
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))
      }
      <div className="w-full flex gap-2">
        <button className="w-full p-1 bg-gray-500 hover:bg-gray-700 rounded flex justify-center items-center"><LuEye className="mr-2"/>Ver</button>
        {
          !laminaIsInAlbum && (<button onClick={handleAddLamina} className="w-full p-1 bg-blue-500 hover:bg-blue-700 rounded">Agregar</button>)
        }
      </div>
    </div>
  )
}