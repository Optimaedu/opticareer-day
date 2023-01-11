import { Migration } from '@mikro-orm/migrations';

export class Migration20230111162253 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `app_user` (`id` BINARY(16) not null, `name` varchar(64) not null, `username` varchar(64) not null, `password` varchar(60) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `app_user` add unique `app_user_username_unique`(`username`);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `app_user`;');
  }

}
