// priority: 0

ServerEvents.recipes((event) => {
  event.remove({ mod: "modular_machinery_reborn" });
});

RecipeViewerEvents.groupEntries("item", (event) => {
  event.group(
    /^modular_machinery_reborn:/,
    "kubejs:modular_machinery_reborn",
    "Modular Machinery Reborn",
  );
});
