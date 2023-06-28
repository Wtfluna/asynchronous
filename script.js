//Create a button 

let button = document.createElement('button');
button.id = "myButton";
button.textContent = "Click Me";

/*const body = document.querySelector("body");
body.appendChild(button); = ligne 9*/

document.body.appendChild(button);

button.onclick = function () {

    const fetchJson = fetch("becode.json");
    console.log("Making the request", fetchJson);

    const response = fetchJson.then((response) => response.json());
    console.log("Treating the response", response);

    response.then((data) => {
        console.log(data);
        generateList(data);
    });
}



function generateList(rules) {
    const ul = document.createElement('ul');
    for (const rule of rules) {
        const li = document.createElement('li');
        li.textContent = rule;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

