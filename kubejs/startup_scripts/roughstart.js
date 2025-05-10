// priority: 0

const flintTeir = (tier) => {
  tier.uses = 20;
  tier.speed = 2.0;
  tier.attackDamageBonus = 1.0;
  // tier.level = 0
  tier.enchantmentValue = 15;
  tier.repairIngredient = "minecraft:flint";
};

StartupEvents.registry("item", (event) => {
  event.create("roughstart:flint_sword", "sword").tier("wood").modifyTier(flintTeir);
  event.create("roughstart:flint_axe", "axe").tier("wood").modifyTier(flintTeir);
  event.create("roughstart:flint_pickaxe", "pickaxe").tier("wood").modifyTier(flintTeir);
  event.create("roughstart:twine");
});

BlockEvents.modification((event) => {
  const woods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry"];
  woods.forEach((wood) => {
    const types = ["crimson", "warped"].includes(wood) ? ["hyphae", "stem"] : ["log", "wood"];

    types.forEach((type) => {
      event.modify(`minecraft:${wood}_${type}`, (modify) => {
        modify.requiresTool = true;
      });

      event.modify(`minecraft:stripped_${wood}_${type}`, (modify) => {
        modify.requiresTool = true;
      });

      event.modify(`minecraft:${wood}_planks`, (modify) => {
        modify.requiresTool = true;
      });
    });
  });
});
