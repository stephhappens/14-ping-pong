# --- Created by Slick DDL
# To stop Slick DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table "games" ("id" SERIAL NOT NULL PRIMARY KEY,"player_1" VARCHAR(254) NOT NULL,"player_2" VARCHAR(254) NOT NULL,"score_1" INTEGER NOT NULL,"score_2" INTEGER NOT NULL,"date_time" VARCHAR(254) NOT NULL);

# --- !Downs

drop table "games";

