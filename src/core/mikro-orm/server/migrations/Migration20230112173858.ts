import { Migration } from '@mikro-orm/migrations';

export class Migration20230112173858 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `question` (`id` BINARY(16) not null, `content` json not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `question`;');
  }

}
