import useStore from "../../../store/store"
import { formatCounter } from "../../../utils/formatCounter";

export const Counter = () => {
    const { counter } = useStore();
    return (
        <div className="mt-4 flex justify-between items-center w-full">
            <div>Puedes generar nuevamente en</div>
            <span className="font-bold text-blue-500">00:{formatCounter(counter)}</span>
        </div>
    )
}