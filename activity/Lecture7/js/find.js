   document.getElementById("find").addEventListener("submit" , (e) =>{
    e.preventDefault();
       let name =  document.getElementById("findAn").value;
        console.log( document.getElementById("findAn").value);
        const creatures = JSON.parse(localStorage.getItem("creatures"))
        const results = creatures.filter(c => 
        c.name.toLowerCase().includes(name)    
    );
    let resultHTML = "";
    resultHTML = "<ul>";
    results.forEach(c => {
      resultHTML += `<li><strong>${c.name}</strong> (${c.type}) - Habitat: ${c.habitat}</li>`;
    });
    resultHTML += "</ul>"

  document.getElementById("searchResult").innerHTML = resultHTML;
    })