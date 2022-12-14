// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const allItems = document.querySelectorAll(".item");
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty}`);

allItems.forEach((element) => {
  const elementTitle = element.querySelector("h2").textContent;
  const oneTitleElements = element.querySelectorAll("li");

  const oneTitleElementsQty = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElementsQty}`);
});
