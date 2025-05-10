// priority: 0

LootJS.modifiers((event) => {
  const dropTwine = LootEntry.of("roughstart:twine").when((conditions) => {
    conditions.matchTool("farmersdelight:flint_knife");
    conditions.randomChance(0.25);
  });

  event.addBlockModifier(["minecraft:grass", "minecraft:tall_grass"]).addSequenceLoot(dropTwine);
  event.addBlockModifier(["minecraft:gravel"]).randomChance(0.25).addLoot("roughstart:flint_shard");
});
