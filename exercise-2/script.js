//Create a button 

let button = document.createElement('button');
button.id = "myButton";
button.textContent = "Click Me";
document.body.appendChild(button);

utton.onclick = function () {

    const fetchAPI = fetch("https://api.chucknorris.io/jokes/random");
    console.log("Making the request", fetchAPI);

    const response = fetchJson.then((response) => response.json());
    console.log("Treating the response", response);

    response.then((data) => {
        console.log(data);
        generateList(data);
    });
}