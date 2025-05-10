// priority: 0

LootJS.modifiers((event) => {
  /**
   * First loot entry with a condition. Will drop if the player has fortune.
   */
  const dropTwine = LootEntry.of("roughstart:twine").when((conditions) => {
    conditions.matchTool("farmersdelight:flint_knife");
    conditions.randomChance(0.25);
  });

  event.addBlockModifier(["minecraft:grass", "minecraft:tall_grass"]).addSequenceLoot(dropTwine);
});
