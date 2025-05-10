// priority: 0

removeAndHideItemRecipes([
  "minecraft:wooden_sword",
  "minecraft:wooden_pickaxe",
  "minecraft:wooden_axe",
  "minecraft:wooden_shovel",
  "minecraft:wooden_hoe",
  "minecraft:stone_sword",
  "minecraft:stone_pickaxe",
  "minecraft:stone_axe",
  "minecraft:stone_shovel",
  "minecraft:stone_hoe",
]);

ServerEvents.recipes((event) => {
  function tools(output, material) {

    // SWORD
    event.shaped(output + "_sword", ["M", "M", "S"], {
      M: material,
      S: "minecraft:stick"
    });

    // PICKAXE
    event.shaped(output + "_pickaxe", ["MMM", " S ", " S "], {
      M: material,
      S: "minecraft:stick"
    });

    // AXE
    event.shaped(output + "_axe", ["MM", "MS", " S"], {
      M: material,
      S: "minecraft:stick"
    });
    event.shaped(output + "_axe", ["MM", "SM", "S "], {
      M: material,
      S: "minecraft:stick"
    }).hide();

    // SHOVEL
    event.shaped(output + "_shovel", ["M", "S", "S"], {
      M: material,
      S: "minecraft:stick"
    });

    // HOE
    event.shaped(output + "_hoe", ["MM", " S", " S"], {
      M: material,
      S: "minecraft:stick"
    });
    event.shaped(output + "_hoe", ["MM", "S ", "S "], {
      M: material,
      S: "minecraft:stick"
    }).hide();
  }

  tools("coppertools:copper", "minecraft:copper_ingot");

  event.shaped("flint_sword", ["F", "S"], {
    F: "minecraft:flint",
    S: "minecraft:stick"
  }).hide();

  event.shaped("flint_axe", ["MM", "S ", "S "], {
    F: "minecraft:flint",
    T: "coppertools:twine",
    S: "minecraft:stick"
  }).hide();

  event.shaped("flint_pickaxe", ["MM", "S ", "S "], {
    F: "minecraft:flint",
    T: "coppertools:twine",
    S: "minecraft:stick"
  }).hide();

});