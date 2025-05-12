// priority: 0

removeAndHideItemRecipes([
  "sophisticatedbackpacks:everlasting_upgrade",
  "sophisticatedbackpacks:stack_upgrade_tier",
  "sophisticatedbackpacks:stack_upgrade_tier_1",
  "sophisticatedbackpacks:stack_upgrade_tier_2",
  "sophisticatedbackpacks:stack_upgrade_tier_3",
  "sophisticatedbackpacks:stack_upgrade_tier_4",
  "sophisticatedbackpacks:battery_upgrade",
  "sophisticatedbackpacks:blasting_upgrade",
  "sophisticatedbackpacks:auto_blasting_upgrade",
  "sophisticatedbackpacks:smoking_upgrade",
  "sophisticatedbackpacks:auto_smoking_upgrade",
  "sophisticatedbackpacks:smelting_upgrade",
  "sophisticatedbackpacks:auto_smelting_upgrade",
  "sophisticatedbackpacks:inception_upgrade",
]);

removeItemRecipes(["sophisticatedbackpacks:iron_backpack"]);

ServerEvents.recipes((event) => {
  event.custom({
    "neoforge:conditions": [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName: "sophisticatedbackpacks:iron_backpack",
      },
    ],
    type: "sophisticatedbackpacks:backpack_upgrade",
    category: "misc",
    key: {
      B: { item: "sophisticatedbackpacks:copper_backpack" },
      I: { tag: "c:ingots/iron" },
    },
    pattern: ["III", "IBI", "III"],
    result: {
      count: 1,
      id: "sophisticatedbackpacks:iron_backpack",
    },
  });
});
