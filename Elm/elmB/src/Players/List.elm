module Players.List exposing (..)

import Html exposing (..)
import Html.Attribute exposing (class)
import Msgs exposing (Msg)
import Models exposing (Model, initialModel)

view : List Player -> Html Msg
view players =
    div[][
        nav,
        list players
    ]

nav: Html Msg
nav =
  div [class "clearfix mb2 white bg-black"]
      [div [class "left p2"][text "Players"]]
