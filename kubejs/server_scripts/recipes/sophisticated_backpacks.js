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
    type: "sophisticatedbackpacks:backpack_upgrade",
    "fabric:load_conditions": [
      {
        condition: "sophisticatedcore:item_enabled",
        itemRegistryName: "sophisticatedbackpacks:iron_backpack",
      },
    ],
    pattern: ["III", "IBI", "III"],
    key: {
      B: {
        item: "sophisticatedbackpacks:copper_backpack",
      },
      I: {
        tag: "c:iron_ingots",
      },
    },
    result: {
      item: "sophisticatedbackpacks:iron_backpack",
    },
  });
});
