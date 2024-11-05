namespace SpriteKind {
    export const jackinthebox = SpriteKind.create()
    export const end = SpriteKind.create()
    export const mapzz = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.jackinthebox, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroy(sprite, effects.ashes, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PC block0`, function (sprite, location) {
    if (space_data_key < 1) {
        game.showLongText("data center log day 1: everything is looking good, but me and the crew are still sceptical xender really cheaped out on the construction", DialogLayout.Bottom)
        game.showLongText("data center log day 5: i knew it, we have had to repair the solarpannels twice now.", DialogLayout.Bottom)
        game.showLongText("data center log day 10: why do i even work for this company, the pay is minimum", DialogLayout.Bottom)
        game.showLongText("data center log day 15: the radar was destroyed in a sand storm, we can't communicate with the big eyes in the sky anymore", DialogLayout.Bottom)
        game.showLongText("data center log day 35: i got the emergency power on finaly", DialogLayout.Bottom)
        game.showLongText("data center log day 50: xander can go to hell! i hate this company! this was just a stupid lie, it was a trap", DialogLayout.Bottom)
        game.showLongText("data center log day 52:                                                                          ", DialogLayout.Bottom)
        game.showLongText(" data note acquired: rocket silo key", DialogLayout.Top)
        tiles.setWallAt(tiles.getTileLocation(58, 34), false)
        space_ship = 1
        pause(100)
        space_data_key += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    info.changeScoreBy(4)
    controller.moveSprite(space_dude, 100, 100)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.setGameOverMessage(false, "you melted my heart")
    info.changeLifeBy(-100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`salamander fosil`, function (sprite, location) {
    if (broke_ass_mig8 < 1) {
        game.showLongText("it's locked i need a key", DialogLayout.Bottom)
        broke_ass_mig8 = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    this_some_gordon_ramsey_shit += 1
    if (this_some_gordon_ramsey_shit == 1) {
        game.showLongText("this a a grape-pod imagine a grape inside a grape, like I'll be inside you~", DialogLayout.Bottom)
    }
    O2 += 3
    info.changeLifeBy(3)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    if (space_ship == 1) {
        space_dude = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................dd..............................
            ...................ddd............................
            ......................ddd1111111111111111199999...
            .......................1d1111111111111111199999...
            .......................1111111111111111111999119..
            ..................ffff.11f1111111111111111999919..
            .............555544ffffff111111111111111111999119.
            .......555555554444ffffff111111111111111111999919.
            ....555555555444222ffffff111111111111111111999919.
            .555555555555444422fffffff11111111111111111999999.
            ..55555555544422222ffffffff1111111111111111999999.
            ......5555554444222fffffff11111111111111111999999.
            .........5555554444ffffff111111111111111111999999.
            ............5555554ffffff111111111111111111999999.
            .................55ffffff111111111111111111999999.
            ..................ffff.11f1111111111111111999999..
            .......................1111111111111111111999999..
            .......................1d1111111111111111199999...
            ......................ddd1111111111111111199999...
            ...................ddd............................
            ..................dd..............................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level4`)
        game.showLongText("you have  successfully escaped orbit :) ", DialogLayout.Bottom)
        game.showLongText("you are 2 days 10 hours and 32 minuets late to work", DialogLayout.Bottom)
        game.showLongText("since this planet is under the xander.co name your harvesting will be billed", DialogLayout.Bottom)
        game.showLongText("you now owe xader.co 205 million dollars and counting", DialogLayout.Bottom)
        game.showLongText("thank you for your participation - xender.co", DialogLayout.Bottom)
        game.showLongText(":)", DialogLayout.Bottom)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    first_time_eating += 1
    if (first_time_eating == 1) {
        game.showLongText("this is a tomapper, hot like you and nutritious.", DialogLayout.Bottom)
    }
    O2 += 1
    info.changeLifeBy(1)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    info.changeScoreBy(7)
    controller.moveSprite(space_dude, 100, 100)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    times_been_in_food_habitatA += 1
    if (times_been_in_food_habitatA == 1) {
        game.showLongText("welcome to flora habitat-A", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.setGameOverMessage(false, "damn you're hot")
    info.changeLifeBy(-100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.jackinthebox, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "nICE")
    info.changeLifeBy(-1000000)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.jackinthebox, assets.tile`myTile`, function (sprite, location) {
    sprites.destroy(sprite, effects.ashes, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeScoreBy(1)
    controller.moveSprite(space_dude, 100, 100)
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "maybe the vegans were right")
    info.changeLifeBy(-1000000)
    sprites.destroy(otherSprite)
})
let ice_golem_clash_royale: Sprite = null
let mutated_greenbean: Sprite = null
let space_ship = 0
let space_dude: Sprite = null
let this_some_gordon_ramsey_shit = 0
let broke_ass_mig8 = 0
let first_time_eating = 0
let space_data_key = 0
let times_been_in_food_habitatA = 0
tiles.setCurrentTilemap(tilemap`level1`)
let O2 = 60
times_been_in_food_habitatA = 0
space_data_key = 0
first_time_eating = 0
broke_ass_mig8 = 0
this_some_gordon_ramsey_shit = 0
space_dude = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 4 4 5 5 1 1 . . . 
    . . . 1 1 1 1 1 4 4 4 5 5 . . . 
    . . . 1 d d d 1 1 4 4 4 4 5 . . 
    . . . . d d d 1 1 1 1 4 4 4 . . 
    . . . . d d d 1 1 1 1 1 1 . . . 
    . . . . d d d 1 7 8 2 . . . . . 
    . . . . d d d 1 3 a . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    `, SpriteKind.Player)
let dead_dude = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . 1 1 . . 1 . . . 1 . . . . . 
    . . . 1 1 3 2 2 1 2 2 2 1 1 . . 
    . . . . 1 1 1 2 2 1 1 4 1 1 . . 
    . . . 1 1 d d d d d 1 1 1 1 . . 
    . . 2 1 1 2 2 d d d 1 1 1 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    `, SpriteKind.Player)
let andilo = sprites.create(assets.image`hu7r5f8`, SpriteKind.end)
tiles.placeOnTile(dead_dude, tiles.getTileLocation(18, 76))
tiles.placeOnTile(andilo, tiles.getTileLocation(63, 31))
controller.moveSprite(space_dude, 100, 100)
scene.cameraFollowSprite(space_dude)
info.setScore(1)
info.setLife(60)
game.showLongText("log: day one, i have just now crashed in mars.. great", DialogLayout.Bottom)
pause(500)
game.showLongText("in the top left is your food, aka time left on this cold red rock.", DialogLayout.Bottom)
pause(500)
game.showLongText("in the top right is your money. this crash wasn't free.", DialogLayout.Bottom)
pause(500)
game.showLongText("try selling ores from deposits, and eat fruit.", DialogLayout.Bottom)
game.onUpdateInterval(1000, function () {
    info.changeLifeBy(-1)
    O2 += -1
})
game.onUpdateInterval(randint(500, 1500), function () {
    mutated_greenbean = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . a a c a a . . . . . . . . . . 
        . . a a a c a . . . . . . . . . 
        . . . c a a a a . . . . . . . . 
        . . . . c . a c 7 7 7 7 . . . . 
        . . . . a . a 7 7 7 7 7 . . . . 
        . . . . . a a . . . 7 7 . . . . 
        . . 2 a c a c . . . 7 7 . . . . 
        . . 2 2 a a . . . . 7 7 . . . . 
        . a c 2 c . . . . 7 7 7 . . . . 
        . c a 2 . . . . 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mutated_greenbean, assets.tile`myTile21`)
    mutated_greenbean.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(500, 1500), function () {
    ice_golem_clash_royale = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . 9 . . . . 9 9 9 . . . . . 
        . . 9 9 9 9 9 9 1 1 1 1 1 . . . 
        . 9 . 9 1 1 1 1 1 1 2 1 1 2 . . 
        . 9 9 1 1 1 1 1 1 1 2 1 1 . . . 
        . 9 1 1 9 9 9 9 1 1 1 9 1 . 9 . 
        . 9 1 1 9 9 1 9 1 1 9 9 9 9 . . 
        . 9 1 9 1 9 1 1 1 1 1 1 1 1 . . 
        . . 1 9 1 1 9 1 1 1 9 9 . . . . 
        . . 1 1 9 1 1 1 1 1 9 9 9 . . . 
        . . 1 9 1 1 1 1 9 1 9 9 9 . . . 
        . . 1 9 1 . . 1 9 1 . 9 . 9 . . 
        . . 9 9 9 . . 1 9 9 . . . . . . 
        . . 9 9 9 9 . 9 9 9 . . . . . . 
        `, SpriteKind.jackinthebox)
    tiles.placeOnRandomTile(ice_golem_clash_royale, assets.tile`ice spawner`)
    ice_golem_clash_royale.follow(space_dude, 60)
})
game.onUpdateInterval(100, function () {
    if (O2 > 60) {
        O2 = 60
        info.setLife(60)
    }
})
