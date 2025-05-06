// priority: 0

removeAndHideItemRecipes([
  "computercraft:computer_command",
  "computercraft:monitor_advanced",
  "computercraft:monitor_normal",
  "computercraft:pocket_computer_advanced",
  "computercraft:pocket_computer_normal",
  "computercraft:speaker",
  "computercraft:turtle_advanced",
  "computercraft:turtle_normal",
]);

hideItemRecipes([
  "cc_recrafted:incomplete_processor",
  "cc_recrafted:incomplete_advanced_processor",
]);

removeItemRecipes([
  "computercraft:cable",
  "computercraft:computer_advanced",
  "computercraft:computer_normal",
  "computercraft:disk_drive",
  // "computercraft:printed_book",
  // "computercraft:printed_page",
  // "computercraft:printed_pages",
  "computercraft:printer",
  "computercraft:redstone_relay",
  "computercraft:treasure_disk",
  "computercraft:wired_modem",
  "computercraft:wired_modem_full",
  "computercraft:wireless_modem_advanced",
  "computercraft:wireless_modem_normal",
]);

ServerEvents.recipes((event) => {
  function peripheralBlock(output, source) {
    event.shaped(output, ["IPI", "ISI", "ACA"], {
      I: "create:iron_sheet",
      P: "cc_recrafted:power_supply",
      A: "create:andesite_alloy",
      C: "create:andesite_casing",
      S: source,
    });
  }

  function peripheralPanel(output, source) {
    event.shaped(output, ["IS", "PA"], {
      I: "cc_recrafted:internal_circuit",
      P: "cc_recrafted:pcb_base",
      A: "create:andesite_alloy",
      S: source,
    });
  }

  event.shaped("computercraft:wired_modem_full", [" M ", "M M", " M "], {
    M: "computercraft:wired_modem",
  });

  event.shaped("computercraft:computer_advanced", ["IPI", "IBI", "IDI"], {
    B: "cc_recrafted:advanced_computer_board",
    P: "cc_recrafted:power_supply",
    I: "create:brass_sheet",
    D: "create:brass_casing",
  });

  event.shaped("computercraft:computer_normal", ["IPI", "IBI", "IDI"], {
    B: "cc_recrafted:computer_board",
    P: "cc_recrafted:power_supply",
    I: "create:iron_sheet",
    D: "create:andesite_casing",
  });

  event.shapeless("16x computercraft:cable", ["create:andesite_alloy", "minecraft:copper_ingot", "minecraft:dried_kelp"]);
  event.shapeless("4x computercraft:wired_modem", ["computercraft:wired_modem_full"]);

  peripheralBlock("computercraft:printer", "#c:dyes");
  peripheralBlock("computercraft:redstone_relay", "create:electron_tube");
  peripheralBlock("computercraft:disk_drive", "create:brass_sheet");

  peripheralPanel("computercraft:wired_modem", "computercraft:cable");
  peripheralPanel("computercraft:wireless_modem_normal", "create:transmitter");
  peripheralPanel("computercraft:wireless_modem_advanced", "cc_recrafted:wireless_ender_core");

});


ServerEvents.tags("item", (event) => {
  event.add("c:peripherals", "computercraft:wireless_modem_normal");
  event.add("c:peripherals", "computercraft:wireless_modem_advanced");
  event.add("c:peripherals", "computercraft:redstone_relay");
  event.add("c:peripherals", "computercraft:monitor_normal");
  event.add("c:peripherals", "computercraft:monitor_advanced");
  event.add("c:peripherals", "computercraft:redstone_relay");
  event.add("c:peripherals", "computercraft:speaker");
  event.add("c:peripherals", "computercraft:printer");
  event.add("c:peripherals", "computercraft:disk_drive");
});