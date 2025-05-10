// priority: 0

ServerEvents.recipes((event) => {

  event.shaped("roughstart:flint_sword", ["F", "S"], {
    F: "minecraft:flint",
    S: "minecraft:stick"
  });

  event.shaped("roughstart:flint_axe", ["FF", "TS"], {
    F: "minecraft:flint",
    T: "roughstart:twine",
    S: "minecraft:stick"
  });

  event.shaped("roughstart:flint_axe", ["FF", "ST"], {
    F: "minecraft:flint",
    T: "roughstart:twine",
    S: "minecraft:stick"
  }).hide();

  event.shaped("roughstart:flint_pickaxe", ["FFF", "TST", " S "], {
    F: "minecraft:flint",
    T: "roughstart:twine",
    S: "minecraft:stick"
  });

  event.shapeless("minecraft:string", [ "roughstart:twine", "roughstart:twine" ]);

});