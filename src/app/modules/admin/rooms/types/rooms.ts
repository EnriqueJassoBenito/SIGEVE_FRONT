import {Entity} from "../../../../types/entity";

export type Room = Entity<number> &{
  number_room?: number;
  capacity?: number;
  status_room?: number;
id_room?: number;
}
