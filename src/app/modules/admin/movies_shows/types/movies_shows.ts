import {Entity} from "../../../../types/entity";
import {Movie} from "../../movies/types/movie";
import {Room} from "../../rooms/types/rooms";

export type Movie_show = Entity<number> &{
  name_mve?: string;
  number_room?: Room;
  start_show: string;
  end_show: string;
  date_show: string;
  availability_msw: number;
}
