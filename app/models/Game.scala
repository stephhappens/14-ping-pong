package models

import org.joda.time.DateTime
import play.api.db.slick.Config.driver.simple._
import play.api.libs.json.Json

case class Game(player_1: String, player_2: String, score_1: Int, score_2: Int)

case class FormattedGame(id: Option[Int], players: Array[String], scores: Array[Int], dateTime: String)

case class DBGame(id: Option[Int]=None, player_1: String, player_2: String, score_1: Int, score_2: Int, dateTime: String)

/* Table mapping
 */
class GamesTable(tag: Tag) extends Table[DBGame](tag, "games") {

  def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def player_1 = column[String]("player_1")
  def player_2 = column[String]("player_2")
  def score_1 = column[Int]("score_1")
  def score_2 = column[Int]("score_2")
  def dateTime = column[String]("date_time")

  def * = (id.?, player_1, player_2, score_1, score_2, dateTime) <> (DBGame.tupled, DBGame.unapply _)
}

object FormattedGame {
  implicit val GameReads = Json.reads[FormattedGame]
  implicit val GameWrites = Json.writes[FormattedGame]
}
