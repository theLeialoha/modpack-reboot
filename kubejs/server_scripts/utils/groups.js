// priority: 0

RecipeViewerEvents.groupEntries("item", (event) => {
  event.group(/_pottery_sherd$/, "kubejs:pottery_sherds", "Pottery Sherds");
  event.group(/_smithing_template$/, "kubejs:smithing_templates", "Smithing Templates");
  event.group(/^painting$/, "kubejs:painting", "Paintings");
  event.group(/_toolbox$/, "kubejs:toolbox", "Toolboxes");
  event.group(/create:\w+_package(?:_\w+)?$/, "kubejs:package", "Packages");
});
