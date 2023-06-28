//Create a button 

let button = document.createElement('button');
button.id = "myButton";
button.textContent = "Click Me";
document.body.appendChild(button);

button.onclick = function () {

//Fetch a random fact

    const fetchAPI = fetch("https://api.chucknorris.io/jokes/random");
    console.log("Making the request", fetchAPI);

    const response = fetchAPI.then((response) => response.json());
    console.log("Treating the response", response);

    response.then((data) => {
        console.log(data);
        generateList(data);
    });
}

//Display result in new div