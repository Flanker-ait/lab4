
// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page
class Creature {
    constructor(name, type, habitat){
        this.name = name;
        this.type = type;
        this.habitat = habitat;
    }
    bark(){
        console.log(this.name + " is livnig in " + this.habitat);
    }
}
let creatureArray = [];
document.getElementById("addCreatureForm").addEventListener("submit" , (event) =>{
    event.preventDefault();
    let name = document.getElementById("creatureName").value;
    let type = document.getElementById("creatureType").value;
    let habitat = document.getElementById("creatureHabitat").value;
    let newCreature = new Creature(name, type, habitat);
    creatureArray.push(newCreature);
    displayItem();
    saveCreatures(creatureArray);


  event.target.reset();
});



function displayItem(){
    let listHTML = "<ul>";
    creatureArray.forEach(item =>{
        listHTML += `<li>${item.name} (${item.type}) - Habitat: ${item.habitat}`;
    })
    listHTML += "</ul>";
    document.getElementById("myDiv").innerHTML = listHTML;
}

 function saveCreatures(creatureArray) {
      localStorage.setItem("creatures", JSON.stringify(creatureArray));
      console.log("saved");
    }

 