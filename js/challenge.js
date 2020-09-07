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
