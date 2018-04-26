var receipe = {
    name : "Butter chicken",
    serving: 2,
    ingredients: ["butter", "chicken"],
};

console.log(receipe.name);
console.log("serves: " + receipe.serving);
console.log("Ingredients:")
for (i = 0; i < receipe.ingredients.length; i++) {
    console.log(receipe.ingredients[i]);
}
