// priority: 999

const _Yyr3thqJ6i = (() => {
  const itemsToRemove = [];
  const itemsToHide = [];

  ServerEvents.recipes((event) => {
    for (const item of itemsToRemove) event.remove({ output: item });
  });

  ServerEvents.tags("item", (event) => {
    for (const item of itemsToHide) event.add("c:hidden_from_recipe_viewers", item);
  });

  RecipeViewerEvents.removeEntries("item", (event) => {
    for (const item of itemsToHide) event.remove(item);
  });

  return {
    toRemove: itemsToRemove,
    toHide: itemsToHide,
  };
})();

const removeAndHideItemRecipes = (items) => {
  removeItemRecipes(items);
  hideItemRecipes(items);
};
const removeItemRecipes = (items) => _Yyr3thqJ6i.toRemove.push(items);
const hideItemRecipes = (items) => _Yyr3thqJ6i.toHide.push(items);
