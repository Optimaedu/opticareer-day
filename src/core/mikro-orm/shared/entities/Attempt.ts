import { Entity, Property, PrimaryKey, OptionalProps, ManyToOne } from "@mikro-orm/core";
import uuid from "binary-uuid";
import { UuidBinaryType } from "../types/UuidBinaryType";
import Question from "./Question";

@Entity()
class Attempt {
  
  [OptionalProps]?: 'createdAt'|'nextQuestion';
  
  @PrimaryKey({ type: UuidBinaryType })
  id: string = uuid().uuid;

  @Property()
  createdAt: Date = new Date();

  @Property({length: 64})
  name!: string;
  
  @Property()
  email!: string;

  @ManyToOne({ nullable: true, onDelete: 'set null', default: null })
  nextQuestion?: Question;

}

export default Attempt;
