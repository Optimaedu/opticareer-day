import { Migration } from '@mikro-orm/migrations';

export class Migration20230113233117 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `answer` (`id` binary(16) not null, `content` json not null, `is_correct` tinyint(1) not null, `question_id` binary(16) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `answer` add index `answer_question_id_index`(`question_id`);');

    this.addSql('alter table `answer` add constraint `answer_question_id_foreign` foreign key (`question_id`) references `question` (`id`) on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `answer`;');
  }

}
