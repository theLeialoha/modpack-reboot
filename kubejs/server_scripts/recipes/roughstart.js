// priority: 0

ServerEvents.recipes((event) => {
  event.shaped("roughstart:flint_axe", ["FF", "TS"], {
    F: "minecraft:flint",
    T: "roughstart:twine",
    S: "minecraft:stick",
  });

  event.shaped("roughstart:flint_pickaxe", ["FFF", "TS ", " S "], {
    F: "minecraft:flint",
    T: "roughstart:twine",
    S: "minecraft:stick",
  });

  event.shapeless("minecraft:string", ["roughstart:twine", "roughstart:twine"]);
  event.shapeless("minecraft:flint", [
    "roughstart:flint_shard",
    "roughstart:flint_shard",
    "roughstart:flint_shard",
  ]);
});
