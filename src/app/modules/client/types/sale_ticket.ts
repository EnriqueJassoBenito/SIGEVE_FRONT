import {Entity} from "../../../types/entity";
import {MovieShows} from "./movie_shows";

export type Sale_ticket = Entity<any> &{
  movie_show_ste?: MovieShows,
  token: string | null,
  total_count: number
}
