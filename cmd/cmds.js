//console commands
 powerUps.instructions.effect()     //reproduce this message
 powerUps.warp.effect()             //warp to any level
 tech.giveTech("name")              //replace "name" with tech name
 m.setField("name")                 //standing wave  perfect diamagnetism  negative mass  molecular assembler  plasma torch  time dilation  metamaterial cloaking  pilot wave  wormhole  grappling hook
 b.giveGuns("name")                 //nail gun  shotgun  super balls  wave  missiles  grenades  spores  drones  foam  harpoon  mine  laser
 tech.damage *= 2                   //2x damage
 m.immuneCycle = Infinity           //immune to damage            
 m.coyoteCycles = Infinity          //air jumps
 m.energy = 0                       //set energy
 m.health = 1                       //set health
 m.maxHealth = 1                    //set max health
 m.maxEnergy = 1                    //set max energy
 simulation.enableConstructMode()   //press T to build with mouse
 lore.unlockTesting()               //press T to enter testing

 Matter.Body.setPosition(player, simulation.mouseInGame);
 spawn.bodyRect(simulation.mouseInGame.x, simulation.mouseInGame.y, 50, 50)
 spawn.randomLevelBoss(simulation.mouseInGame.x, simulation.mouseInGame.y) 
 powerUps.spawn(m.pos.x, m.pos.y, "name") //tech gun field heal ammo research coupling boost instructions entanglement
 
 //this URL downloads newest version of n-gon 
 https://codeload.github.com/landgreen/n-gon/zip/refs/heads/master

             // chrome                     firefox
// Win/Linux: Ctrl + Shift + J        Ctrl + Shift + J
//       Mac: Cmd + Option + J        Cmd + Shift + J
