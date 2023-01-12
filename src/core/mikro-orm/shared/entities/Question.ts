import { Entity, Enum, Property, EntityManager, PrimaryKey, OptionalProps, JsonType } from "@mikro-orm/core";
import uuid from "binary-uuid";
import { UuidBinaryType } from "../types/UuidBinaryType";

@Entity()
class Question {
  
  @PrimaryKey({ type: UuidBinaryType })
  id: string = uuid().uuid

  @Property({ type: JsonType })
  content!: { sv: string, fi: string }
  
}

export default Question;