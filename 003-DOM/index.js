//document.querySelector("h1").style.color = "blue"; // <- ids also work 
document.getElementsByTagName("li")[1].style.color = 'brown';
document.querySelector("li a").style.color = 'orange';

document.querySelector("button").style.backgroundColor = 'yellow';

//query Selector is preferred (more specific)


document.querySelector("h1").classList.add("huge");