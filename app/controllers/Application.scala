package controllers

import models._
import org.joda.time.DateTime
import play.api._
import play.api.db.slick._
import play.api.db.slick.Config.driver.simple._
import play.api.data._
import play.api.data.Forms._
import play.api.mvc._
import play.api.Play.current
import play.api.mvc.BodyParsers._
import play.api.libs.json.Json
import play.api.libs.json.Json._

object Application extends Controller{

  //create an instance of the table
  val games = TableQuery[GamesTable] //see a way to architect your app in the computers-database-slick sample

  //JSON read/write macro
  implicit val gameFormat = Json.format[Game]

//  def index = DBAction { implicit rs =>
//    Ok(views.html.index(cats.list))
//  }

//  val gameForm = Form(
//    mapping(
//      "name" -> text(),
//      "color" -> text()
//    )(Game.apply)(Game.unapply)
//  )

//  def insert = DBAction { implicit rs =>
//    val cat = catForm.bindFromRequest.get
//    cats.insert(cat)
//
//    Redirect(routes.Application.index)
//  }

  def jsonFindAll = DBAction { implicit rs =>
    //define new list, and fill it with items modeled after sender contract
    Ok(toJson(games.list))
  }

  def jsonInsert = DBAction(parse.json) { implicit rs =>
    rs.request.body.validate[Game].map { game =>
        val dateTime = DateTime.now
        val dbGame = new DBGame(game.player_1, game.player_2, game.score_1, game.score_2, dateTime)
        games.insert(dbGame)
        Ok(toJson(dbGame))
    }.getOrElse(BadRequest("invalid json"))    
  }
  
}
