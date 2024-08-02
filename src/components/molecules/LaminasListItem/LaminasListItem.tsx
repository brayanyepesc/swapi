import { useInfoLamina } from "../../../utils/extractInfoOfLamina"
import { LaminasListItemProps } from "./types"

export const LaminasListItem = ({ lamina }: LaminasListItemProps) => {
  const infoLamina = useInfoLamina({ lamina });
  return (
    <div className="w-full space-y-1 h-full text-center border p-2 transition-all text-white rounded">
      {
        Object.entries(infoLamina).map(([key, value], index) => (
          <div key={index} className="rounded text-gray-500 shadow-sm p-1 flex justify-between items-center">
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))
      }
      <div className="w-full flex gap-2">
        <button className="w-full p-1 bg-gray-500 hover:bg-gray-700 rounded">Ver</button>
        <button className="w-full p-1 bg-blue-500 hover:bg-blue-700 rounded">Agregar</button>
      </div>
    </div>
  )
}