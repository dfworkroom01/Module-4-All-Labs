const data2 = [[`Name: Bob, Age: 23`], 
    [`Name: Alice, Age: 39`]]


function cardList() {
  let list2 = document.getElementById("myList2");

  data2.forEach((item2) => {
    let li = document.createElement("li");
    li.innerText = item2 
        
    list2.appendChild(li);
  });
}

cardList(data2.splice(0,1))

