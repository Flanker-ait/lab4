
const musicShopItemList = 
[ 
new MusicShopItem("acoustic", "guitars", 100, 50, "A tool used to play music"),
new MusicShopItem("bass", "guitar",200, 100, "A tool used to play music"),
new MusicShopItem("pianos", "keyboard",1000, 20, "A tool used to play modern music"),
new MusicShopItem("digital_pianos", "keyboard",500, 10, "A tool used to play modern music"),
new MusicShopItem("drum", "percussion",50, 500, "A tool used to play music"),
new MusicShopItem("synthesizers", "percussion",50, 250, "A tool used to play music"),
new MusicShopItem("speakers", "dj",1200, 150, "A tool used to play music"),
new MusicShopItem("mixers", "dj",200, 50, "A tool used to play music")
]

document.querySelector("#listItem").addEventListener("click", (e) =>{
    listItems();
})

document.getElementById("addItem").addEventListener("click", (e) =>{
    e.preventDefault();
    let itemName = document.getElementById("addItemName").value;
    let itemNumberRaw = document.getElementById("addItemNumber").value;
    let itemNumber = parseInt(itemNumberRaw);
    let Item = new MusicShopItem(itemName, undefined, undefined, itemNumber);
    addItem(Item);
})

document.getElementById("deleteItem").addEventListener("click", (e) =>{
    e.preventDefault();
    let itemName = document.getElementById("deleteItemName").value;
    removeItem(itemName);
})

document.getElementById("getItem").addEventListener("click", (e) =>{
    e.preventDefault();
    let itemName = document.getElementById("getItemName").value;
    let result = getItem(itemName);
    const content = document.getElementById("get");
    content.innerHTML = `The product you found is ${result.getInfo()}`
})

document.getElementById("calculate").addEventListener("click", (e) =>{
    e.preventDefault();
    let result = calculateTotalValue();
    document.getElementById("totalValue").innerHTML = result;
})

document.getElementById("searchBtn").addEventListener("click", (e)=> {
    e.preventDefault();
    let query = document.getElementById("querySearch").value;
    let result = serarchItems(query);
    document.getElementById("searchResult").innerHTML = result;
})

function listItems(){
    let listHtml = document.getElementById("display").innerHTML;
    listHtml =`<ul class="list-group">`;
    musicShopItemList.forEach(item =>{
    listHtml += `<li class="list-group-item">${item.getInfo()}</li>`;
})
    listHtml += `</ul>`;
    document.getElementById("display").innerHTML = listHtml;
}

function addItem(Item){
    musicShopItemList.forEach(item =>{
        if(Item.getName() == item.getName()){
            item.addItem(Item.getQuantity());
        }
    })
    listItems();
}

function removeItem(itemName){
    let deleteIndex = musicShopItemList.findIndex(i => i.getName() ==  itemName);
    // add comment with findIndex() method in geeksForgeeks
    if(deleteIndex != -1){
        musicShopItemList.splice(deleteIndex, 1);
    }else{
        console.log("please a valid name");
    }
    listItems();
}

function getItem(itemName){
  for(const item of musicShopItemList){
    if(item.getName() === itemName){
      return item;
    }
  }
  return null;
}

function calculateTotalValue(){
    let result = 0;
    for(let item of musicShopItemList){
        result += item.getPrice() * item.getQuantity();
    }
    return "The total amount is " + result;
}

function serarchItems(query){
    let found = false;
    let result = "";
    if(query != null){
        for(let item of musicShopItemList){
        if(item.getName() == query || item.getType() == query){
            found = true;
            result = item.getInfo();
        }
    }
    }
    if(found){
        return result;
    }else{
        return "The product you are looking for is not valid";
    }
}