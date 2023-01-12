import { toBinaryUUID, fromBinaryUUID } from 'binary-uuid';
import { EntityProperty, Platform, Type, ValidationError } from '@mikro-orm/core';

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class UuidBinaryType extends Type {
  convertToDatabaseValue(value: string, platform: Platform): any {
    if (value === null) {
      return null;
    }

    if (!uuidRegex.test(value)) {
      throw ValidationError.invalidType(UuidBinaryType, value, 'JS');
    }

    const binaryUuid = toBinaryUUID(value);
    return binaryUuid;
  }

  convertToJSValue(value: any, platform: Platform): string {
    if (value === null) {
      return '';
    }

    const strUuid = fromBinaryUUID(value);
    // Perform additional type validation check if needed...
    return strUuid;
  }

  getColumnType(prop: EntityProperty, platform: Platform): string {
    return 'binary(16)';
  }
}
