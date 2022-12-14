import {Entity} from "../../../../types/entity";
import {Gender} from "../../genders/types/gender";

export type Movie = Entity<number> &{
  name_mve?: string;
  duration?: number;
  gender?: Gender;
  availability_mve?: number;
  image_mve?: string;
  id_mve?: number;
}
