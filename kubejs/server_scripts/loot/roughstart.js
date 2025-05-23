// priority: 0

LootJS.modifiers((event) => {
  const dropTwine = LootEntry.of("roughstart:twine").when((conditions) => {
    conditions.matchTool("farmersdelight:flint_knife");
    conditions.randomChance(0.65);
  });

  event.addBlockModifier(["minecraft:grass", "minecraft:tall_grass"]).addSequenceLoot(dropTwine);

  const gravelWhenSilkTouch = LootEntry.of("minecraft:gravel").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")),
  );

  const flintWhenFortune = LootEntry.of("minecraft:flint").randomChanceWithEnchantment(
    "minecraft:looting",
    [0.1, 0.14285715, 0.25, 1.0],
  );

  const gravel = LootEntry.sequence(
    LootEntry.of("minecraft:gravel"),
    LootEntry.of("roughstart:flint_shard").when((c) => c.randomChance(0.25)),
  );

  event
    .addBlockModifier("minecraft:gravel")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(gravelWhenSilkTouch, flintWhenFortune, gravel);

  const noDrop = LootEntry.of("minecraft:air").matchTool(
    ItemFilter.not(ItemFilter.tag("#minecraft:pickaxes")),
  );

  const copperOreWhenSilkTouch = LootEntry.of("minecraft:copper_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")),
  );

  const copperDrop = LootEntry.of("minecraft:raw_copper", [2, 5]).applyOreBonus(
    "minecraft:fortune",
  );

  event
    .addBlockModifier("minecraft:copper_ore")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(noDrop, copperOreWhenSilkTouch, copperDrop);
});
