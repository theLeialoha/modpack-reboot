// priority: 0

const copperTier = (tier) => {
  tier.uses = 250
  tier.speed = 4.0
  tier.attackDamageBonus = 2.0
  tier.level = 1
  tier.enchantmentValue = 5
  tier.repairIngredient = '#c:ingots/copper'
};

StartupEvents.registry('item', event => {
  event.create('coppertools:copper_sword', 'sword').modifyTier(copperTier);
  event.create('coppertools:copper_pickaxe', 'pickaxe').modifyTier(copperTier);
  event.create('coppertools:copper_axe', 'axe').modifyTier(copperTier);
  event.create('coppertools:copper_shovel', 'shovel').modifyTier(copperTier);
  event.create('coppertools:copper_hoe', 'hoe').modifyTier(copperTier);
});
