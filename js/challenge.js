let i = -1;
let x = 0;
let int = setInterval(increment, 1000);

function increment(){
  i++;
  document.querySelector("h1#counter").innerHTML = i;
  x = 0;
}

increment();

document.getElementById("minus").addEventListener("click", function(){
  i--;
  document.querySelector("h1#counter").innerHTML = i;
});

document.getElementById("plus").addEventListener("click", function(){
  i++;
  document.querySelector("h1#counter").innerHTML = i;
});

document.getElementById("heart").addEventListener("click", function(){
  x++;
  let li = document.createElement("li");
  let node = document.createTextNode(i + " has been liked " + x + " time(s).");
  let likes = document.querySelector(".likes").lastChild;
  li.appendChild(node);
  if (j > 1){
    lastLike.replaceWith(li)
  } else {
    likes.appendChild(li);
  }
});
