// priority: 0

LootJS.modifiers(event => {


    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const dropTwine = LootEntry.of("roughstart:twine")
        .randomChance(0.5).when(c =>
            c.matchTool(ItemFilter.item("roughstart:flint_sword"))
        )

    event.addBlockModifier([ "minecraft:grass", "minecraft:tall_grass" ])
        .addSequenceLoot(dropTwine)
})