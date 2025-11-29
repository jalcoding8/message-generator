
const randomMeal = () => {
    console.log();
    console.log("THE MEAL PLAN GENERATOR")
    console.log("")
    console.log("Creating a meal suggestion to include a beverage, entree and side dish")
    let bevOne = String.fromCodePoint(0x1F377);  //wine
    //console.log(bevOne);
    let bevTwo = String.fromCodePoint(0x1F37A);  //beer
    //console.log(bevTwo);
    let bevThree = String.fromCodePoint(0x1F964); //milkshake
    //console.log(bevThree);
    let bevFour = String.fromCodePoint(0x1F95B); //milk
    let bevFive = String.fromCodePoint(0x1F379); //tropical drink
    let bevSix = String.fromCodePoint(0x1F375); //Sake
    let bevSeven = String.fromCodePoint(0x1F375); //tea
    bevList = ["red wine " + bevOne, "dark beer " + bevTwo, "vanilla bean milkshake " + bevThree, "fresh oat milk "+ bevFour, "blackberry lime punch " + bevFive, "Gingo-shu sake " + bevSix, "Earl grey tea " + bevSeven];
    //console.log(bevList);
  
  
    let entreeOne = String.fromCodePoint(0x1F32E); // taco
    //console.log(entreeOne);
    let entreeTwo = String.fromCodePoint(0x1F95F); // potsticker
    //console.log(entreeTwo);
    let entreeThree = String.fromCodePoint(0x1F99E); // lobster
    //console.log(entreeThree);
    let entreeFour = String.fromCodePoint(0x1F354); //cheeseburger
    let entreeFive = String.fromCodePoint(0x1F355); //pizza
    let entreeSix = String.fromCodePoint(0x1F357); //chicken drumstick
    let entreeSeven = String.fromCodePoint(0x1F364); //shrimp
    entreeList = ["beef tacos " + entreeOne, "vegetable pot stickers " + entreeTwo, "lobster en croute " + entreeThree, "cheeseburger on a brioche bun " + entreeFour, "stuffed, sausage pizza " + entreeFive, "golden, fried chicken " + entreeSix, "shrimp sauteed in wine sauce " + entreeSeven];
  
    let vegOne = String.fromCodePoint(0x1F951); // avacado
    //console.log(vegOne);
    let vegTwo = String.fromCodePoint(0x1F966); // broccoli
    //console.log(vegTwo);
    let vegThree = String.fromCodePoint(0x1F330); // beets
    //console.log(vegThree);
    let vegFour = String.fromCodePoint(0x1F33D); // corn-on-the-cob
    let vegFive = String.fromCodePoint(0x1F345); // tomato
    let vegSix = String.fromCodePoint(0x1F957); //garden Desarticulados
    let vegSeven = String.fromCodePoint(0x1F955); //carrots
    let vegEight = String.fromCodePoint(0x1F349); //watermelon
    vegList = ["sliced avacado with garden tomatoes " + vegOne + vegFive, "broccoli with an herb cheese sauce " + vegTwo, "warm, golden beet salad " + vegThree, "fresh corn-on-the-cob " + vegFour, "garden veggie butter lettuce salad " + vegSix, "candied carrots " + vegSeven, "fresh watermelon " + vegEight];
  
    let bevSelect = Math.floor(Math.random() * bevList.length);
    //console.log(bevList[bevSelect]);
    let entreeSelect = Math.floor(Math.random() * entreeList.length);
    //console.log(entreeList[entreeSelect]);
    let sideSelect = Math.floor(Math.random() * vegList.length);
    //console.log(vegList[vegSelect]);
    console.log(bevOne, bevTwo, bevThree, bevFour, entreeOne, entreeTwo, entreeThree, entreeFour, vegOne, vegTwo, vegThree, vegFour, vegFive);
    console.log();
    let beverage = bevList[bevSelect];
    let entree = entreeList[entreeSelect];
    let side = vegList[sideSelect];
  
    console.log("_______________________________");
    let selection = `Your dinner menu suggestion is: \n\nbeverage: ${beverage}\nentree: ${entree}\nside: ${side}. \n\nEnjoy`;
    console.log("_______________________________\n");
  
    return selection;
  };
  
  let newMealObject = randomMeal();
  console.log(newMealObject);
  //console.log(randomMeal());
  console.log();
  console.log("_______________________________");
  console.log("_______________________________");
  console.log();
  console.log("Tell Alexa to make a list of ingredients.");
  console.log("Bon Appetit.");
  console.log();
