import {Entity} from "../../../types/entity";
import {Room} from "../../admin/rooms/types/rooms";

export type MovieShows = Entity<number> &{
  id_msw?: number
  image_mve?: string;
  name_mve?: string;
  number_room?: Room;
  start_show?: string;
  date_show?: string;

}
