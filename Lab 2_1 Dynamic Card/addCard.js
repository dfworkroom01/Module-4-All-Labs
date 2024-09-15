const data = [[`Name: Bob, Age: 23`], 
    [`Name: Alice, Age: 39`]]


function cardList() {
  let list = document.getElementById("myList");

  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item 
        
    list.appendChild(li);
  });
}

cardList(data.splice(1,1))

