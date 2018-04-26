var recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa'] 
};

var myMole = recipe;

console.log(myMole.title);
console.log("Serves: " + myMole.servings);
console.log("Ingredients:");

myMole.ingredients.forEach(function(Ingredient){
    console.log(Ingredient);
});
