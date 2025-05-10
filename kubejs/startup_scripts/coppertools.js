// priority: 0

ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 250
    tier.speed = 4.0
    tier.attackDamageBonus = 2.0
    tier.level = 1
    tier.enchantmentValue = 5
    tier.repairIngredient = '#c:ingots/copper'
  })
})

StartupEvents.registry('item', event => {
  event.create('coppertools:copper_sword', 'sword').tier('copper');
  event.create('coppertools:copper_pickaxe', 'pickaxe').tier('copper');
  event.create('coppertools:copper_axe', 'axe').tier('copper');
  event.create('coppertools:copper_shovel', 'shovel').tier('copper');
  event.create('coppertools:copper_hoe', 'hoe').tier('copper');
});
