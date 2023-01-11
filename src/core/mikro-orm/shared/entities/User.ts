import { Entity, Enum, Property, EntityManager, PrimaryKey, OptionalProps } from "@mikro-orm/core";
import uuid from "binary-uuid";

@Entity({ 
  tableName: 'app_user',
})
class User {
  
  @PrimaryKey({ columnType: 'BINARY(16)' })
  id: Buffer = uuid().buffer

  @Property({ length: 64 })
  name!: string;

  @Property({ length: 64, unique: true })
  username!: string;

  @Property({ length: 60 })
  password!: string;
  
}

export default User;