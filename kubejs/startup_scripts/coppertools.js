// priority: 0

const copperTier = (tier) => {
  tier.uses = 250
  tier.speed = 4.0
  tier.attackDamageBonus = 2.0
  // tier.level = 1
  tier.enchantmentValue = 5
  tier.repairIngredient = '#c:ingots/copper'
};

StartupEvents.registry('item', event => {
  event.create('coppertools:copper_sword', 'sword').tier('stone').modifyTier(copperTier);
  event.create('coppertools:copper_pickaxe', 'pickaxe').tier('stone').modifyTier(copperTier);
  event.create('coppertools:copper_axe', 'axe').tier('stone').modifyTier(copperTier);
  event.create('coppertools:copper_shovel', 'shovel').tier('stone').modifyTier(copperTier);
  event.create('coppertools:copper_hoe', 'hoe').tier('stone').modifyTier(copperTier);
});
