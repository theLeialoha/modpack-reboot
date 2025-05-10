// priority: 0

LootJS.modifiers((event) => {
  /**
   * First loot entry with a condition. Will drop if the player has fortune.
   */
  const dropTwine = LootEntry.of("roughstart:twine").matchAllOf((conditions) => {
    conditions.matchTool("roughstart:flint_sword").randomChance(0.25);
  });

  event.addBlockModifier(["minecraft:grass", "minecraft:tall_grass"]).addSequenceLoot(dropTwine);
});
