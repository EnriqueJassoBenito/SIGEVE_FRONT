import {Entity} from "../../../../types/entity";
import {Movie} from "../../movies/types/movie";
import {Room} from "../../rooms/types/rooms";
import {Movie_show} from "../../movies_shows/types/movies_shows";
import {UserSigning} from "../../../auth/types/user";

export type Sale_ticker = Entity<number> &{
  id_ste?: number;
  movie_show_ste?: Movie_show;
  client_spo?: UserSigning;
  total_count?: string;
}
