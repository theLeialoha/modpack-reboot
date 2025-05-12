// priority: 0

ServerEvents.recipes((event) => {
  event.shaped("cc_recrafted:power_supply", ["RII", "BA "], {
    B: "cc_recrafted:pcb_base",
    R: "minecraft:redstone_block",
    I: "cc_recrafted:internal_circuit",
    A: "create:andesite_alloy",
  });

  event.shaped("cc_recrafted:computer_board", [" PI", "RRI", "BB "], {
    B: "cc_recrafted:pcb_base",
    R: "minecraft:redstone_block",
    P: "cc_recrafted:processor",
    I: "cc_recrafted:internal_circuit",
  });

  event.shaped("cc_recrafted:advanced_computer_board", ["QPI", "QRI", "BBB"], {
    B: "cc_recrafted:pcb_base",
    R: "minecraft:redstone_block",
    P: "cc_recrafted:advanced_processor",
    I: "cc_recrafted:internal_circuit",
    Q: "minecraft:quartz",
  });

  event.shaped("cc_recrafted:internal_circuit", ["GG", "RS"], {
    G: "minecraft:gold_nugget",
    R: "minecraft:redstone",
    S: "create:iron_sheet",
  });

  event.shaped("cc_recrafted:wireless_ender_core", ["TC", "RS"], {
    C: "cc_recrafted:internal_circuit",
    T: "create:transmitter",
    R: "minecraft:redstone",
    S: "create:golden_sheet",
  });

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { tag: "c:plates/gold" },
    loops: 1,
    results: [{ id: "cc_recrafted:advanced_processor" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }, { tag: "c:plates/copper" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }, { tag: "c:dusts/redstone" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }, { tag: "c:nuggets/gold" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }, { tag: "c:gems/quartz" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
      {
        type: "create:deploying",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }, { tag: "c:plates/iron" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
      {
        type: "create:pressing",
        ingredients: [{ item: "cc_recrafted:incomplete_processor" }],
        results: [{ id: "cc_recrafted:incomplete_processor" }],
      },
    ],
    transitional_item: { id: "cc_recrafted:incomplete_processor" },
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { tag: "c:ingots/gold" },
      { tag: "c:ingots/gold" },
      { tag: "c:ingots/gold" },
      { tag: "c:plates/copper" },
      { tag: "c:plates/iron" },
      { tag: "c:gems/lapis" },
      { tag: "c:gems/lapis" },
      { item: "cc_recrafted:internal_circuit" },
      { item: "cc_recrafted:internal_circuit" },
    ],
    results: [{ id: "cc_recrafted:processor" }],
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "minecraft:glass_pane" },
      { tag: "c:plates/copper" },
      { item: "create_things_and_misc:rose_quartz_sheet" },
    ],
    results: [{ id: "cc_recrafted:pcb_base" }],
  });
});
