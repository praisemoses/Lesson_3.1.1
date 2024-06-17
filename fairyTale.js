// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place;
place="Arizona";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName; 
creatureName = "dragon";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color;
color = "green";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2;
color2="purple";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion;
emotion="sad";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character;
character="winnie the pooh"
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number;
number=5;
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item;
item="food";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2;
item2="music";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb;
verb="loved";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb;
adverb="exactly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2;
number2 = 3





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "Arizona";
    document.querySelector(".creature-name").innerHTML = "dragon";
    document.querySelector(".color").innerHTML = "green";
    document.querySelector(".color-2").innerHTML = "purple";
    document.querySelector(".emotion").innerHTML = "sad";
    document.querySelector(".character").innerHTML = "winnie the pooh";
    document.querySelector(".creature-name-again").innerHTML = "dragon";
    document.querySelector(".number").innerHTML = 5;
    document.querySelector(".item").innerHTML = "food";
    document.querySelector(".character-again").innerHTML = "dragon";
    document.querySelector(".item-2").innerHTML = "music";
    document.querySelector(".verb").innerHTML = "loved";
    document.querySelector(".adverb").innerHTML = "exactly";
    document.querySelector(".number-2").innerHTML = 3;
    document.querySelector(".story-container").style = "display:block";
});
