import { useInfoLamina } from "../../../utils/extractInfoOfLamina"
import { LaminasListItemProps } from "./types"

export const LaminasListItem = ({ lamina }: LaminasListItemProps) => {
  const infoLamina = useInfoLamina({ lamina });
  return (
    <div className="hover:bg-gray-200 w-full space-y-1 h-full text-center border p-2 transition-all cursor-pointer text-white rounded">
      {
        Object.entries(infoLamina).map(([key, value], index) => (
          <div key={index} className="rounded text-gray-500 shadow-sm p-1 flex justify-between items-center">
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))
      }
    </div>
  )
}