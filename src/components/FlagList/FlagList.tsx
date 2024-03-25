import { estados, Estado } from "../../data/FlagsData";
import { FlagCard } from "./FlagCard/FlagCard";

export const FlagList = () => {
    return (
        <ul className="flag_list">
            {estados.map((estado: Estado, index: number) => (
                <FlagCard key={index} estado={estado} />
            ))}
        </ul>
    )
}