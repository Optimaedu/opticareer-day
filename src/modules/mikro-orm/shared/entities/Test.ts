import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import uuid from "binary-uuid";

@Entity()
export class Test {

  @PrimaryKey({ columnType: 'BINARY(16)' })
  id: Buffer = uuid().buffer
  
  @Property()
  name!: string;

  @Property()
  comment!: string

}
