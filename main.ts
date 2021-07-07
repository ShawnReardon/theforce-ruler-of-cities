controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MrMayor.setFlag(SpriteFlag.GhostThroughTiles, true)
    if (controller.dx(100) > 0) {
        MrMayor.vx += 100
    } else if (controller.dx(100) < 0) {
        MrMayor.vx += -100
    } else if (controller.dy() > 0) {
        MrMayor.vy += -100
        timer.after(500, function () {
            MrMayor.setFlag(SpriteFlag.GhostThroughTiles, false)
            MrMayor.vy += 100
        })
    } else if (controller.dy() < 0) {
        MrMayor.vy += 100
        timer.after(500, function () {
            MrMayor.setFlag(SpriteFlag.GhostThroughTiles, false)
            MrMayor.vy += 100
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    MrMayorBar.value += -10
})
let MrMayorBar: StatusBarSprite = null
let MrMayor: Sprite = null
MrMayor = sprites.create(img`
    ........fffff............
    ........fffff............
    ........fffff............
    ........11511............
    ......fffffffff......99..
    .......eeedddd......999..
    .......eeedd8d.....999...
    ......eeddddddd...999....
    .....eeedddddd...999.....
    .....effffffff..f99......
    .....effffffffffff.......
    .....efffffffffff........
    ......ffffffff...........
    ......ffffffff...........
    .......ff..ff............
    .......ff..ff............
    `, SpriteKind.Player)
controller.moveSprite(MrMayor)
scene.cameraFollowSprite(MrMayor)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(MrMayor, tiles.getTileLocation(0, 7))
MrMayorBar = statusbars.create(20, 4, StatusBarKind.Health)
MrMayorBar.setLabel("HP")
MrMayorBar.value = 100
MrMayorBar.attachToSprite(MrMayor, -25, -5)
