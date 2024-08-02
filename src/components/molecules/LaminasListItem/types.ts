import { IMovie, ICharacter, IStarship } from "../../../types/types";

export interface LaminasListItemProps {
    lamina: IMovie | ICharacter | IStarship;
}