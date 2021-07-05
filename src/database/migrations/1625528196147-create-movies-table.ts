import {MigrationInterface, QueryRunner} from "typeorm";

export class createMoviesTable1625528196147 implements MigrationInterface {
    name = 'createMoviesTable1625528196147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" varchar PRIMARY KEY NOT NULL, "director" varchar NOT NULL, "name" varchar NOT NULL, "genre" varchar NOT NULL, "actors" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
