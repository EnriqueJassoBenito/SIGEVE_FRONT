
import {Entity} from "../../../types/entity";
import {Gender} from "../../admin/genders/types/gender";

export type Movie = Entity<number> &{
  name_mve: string;
  duration: number;
  name_gdr: Gender;
  image_mve: string;
/*  availability_mve: number;*/
}
