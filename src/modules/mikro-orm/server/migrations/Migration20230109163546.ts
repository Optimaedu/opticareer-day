import { Migration } from '@mikro-orm/migrations';

export class Migration20230109163546 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `test` (`id` BINARY(16) not null, `name` varchar(255) not null, `comment` varchar(255) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `test`;');
  }

}
