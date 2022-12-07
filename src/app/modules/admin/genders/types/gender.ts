import { Entity } from '../../../../types/entity';

export type Gender = Entity<number> &{
  id_gdr: number;
  name_gdr: String;
  status_gdr: number;
}
