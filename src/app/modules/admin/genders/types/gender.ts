import { Entity } from '../../../../types/entity';

export type Gender = Entity<number> &{
  name_gdr?: string;
  status_gdr?: number;
}
