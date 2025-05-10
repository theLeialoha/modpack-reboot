// priority: 0

ItemEvents.toolTierRegistry(event => {
  event.add('flint', tier => {
    tier.uses = 20
    tier.speed = 2.0
    tier.attackDamageBonus = 1.0
    tier.level = 0
    tier.enchantmentValue = 15
    tier.repairIngredient = 'minecraft:flint'
  })
});

StartupEvents.registry('item', event => {
  event.create('roughstart:flint_sword', 'axe').tier('flint');
  event.create('roughstart:flint_axe', 'axe').tier('flint');
  event.create('roughstart:flint_pickaxe', 'pickaxe').tier('flint');
  event.create('roughstart:twine');
});

BlockEvents.modification(event => {

  const woods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry"];

  for (const wood of woods) {
    const types = ["crimson", "warped"].includes(wood) ? ["hyphae", "stem"] : ["log", "wood"];

    for (const type of types) {
      event.modify('minecraft:' + wood + '_' + type, modify => {
        modify.requiresTool = true
      });

      event.modify('minecraft:stripped_' + wood + '_' + type, modify => {
        modify.requiresTool = true
      });

      event.modify('minecraft:' + wood + '_planks', modify => {
        modify.requiresTool = true
      });
    }
  }
});