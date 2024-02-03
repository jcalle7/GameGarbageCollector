let characters = {
    name: "RobertDudley",
    age: 56,
    friend : {
        name: "Isabel I de Inglaterra",
        age: 49,
        father: {
            name: "Enrique VIII de Inglaterra",
            age: 60, 
            stepbrother: {
                name: "Eduardo VI",
                age:"20",
            }
        }
    }

}
function playGame() { 
    alert("Bienvenidos a este juego, está en tus manos las las vidas de Robert, Isabel, Enrique Y Eduardo.");
    alert("¿Cuál era la relación especial entre Robert Dudley y la Reina Isabel I de Inglaterra?");
    alert("1.-Amigos de la infancia, 2.-Hermanos, 3.-Amantes")

    let questionOne = prompt("Seleciona tu respuesta"); 
    switch (questionOne) {
        case "1":
            alert("Amigos de la infancia"); 
            break; 
        case "2":
        case "3":
            delete characters.friend.father.stepbrother;
            document.getElementById('messageContainerOne').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
            console.log(JSON.stringify(characters))
            console.log(characters.friend.father.stepbrother)
            alert("sigue intentándolo");
            break;
    }

    alert("¿Cuál era el título nobiliario que ostentaba Robert Dudley durante su vida?");
    let questionTwo = prompt("a) 1.-Conde de Leicester, 2.-Conde de Essex, 3.-Duque de Norfolk");
    switch (questionTwo) {
        case "1":
            alert("Conde de Leicester"); 
            break; 
        case "2":
        case "3": 
            delete characters.friend.father; 
            document.getElementById('messageContainerTwo').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
            console.log(JSON.stringify(characters))
            console.log(characters.friend.father)
            alert("sigue intentándolo");
            break; 
    } 
    alert("¿Cuál fue el evento trágico que afectó la relación entre Robert Dudley e Isabel I?");
    let questionThree = prompt("1.-Muerte de Amy Robsart, 2.-Ejecución de Robert Dudley, 3.-Muerte de Isabel I");
    switch (questionThree) {
        case "1":
        alert("Muerte de Amy Robsart"); 
        break; 
        case "2":
        case "3":     
        delete characters.friend;
        document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
        console.log(JSON.stringify(characters))
        console.log(characters.friend)
        alert("sigue intentándolo");
        break; 
    }
    alert("Además de su relación personal, ¿en qué actividades políticas estuvo involucrado Robert Dudley durante el reinado de Isabel I?");
    let questionFour = prompt("1.-Consejero de la Reina, 2.-Diplomático, 3.-Comandante militar");
    switch (questionFour) {
        case "1":
            alert("Consejero de la Reina"); 
            alert("Has tomado una buena desición. Has salvado a Robert, Isabel, Enrique Y Eduardo"); 
            alert("Gracias por jugar"); 
        break; 
        case "2":
        case "3": 
        delete characters.name;
        delete characters.age;
        characters =  null ; 
        console.log("fin del juego.");
        document.getElementById('messageContainerFour').innerHTML = `Objeto actual: ${JSON.stringify(characters)}`;
        console.log(JSON.stringify(characters));
        alert("Has eliminado a Robert, Isabel, Enrique Y Eduardo")
        break; 
    }
}
playGame(); 
