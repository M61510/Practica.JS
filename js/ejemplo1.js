var frutas = ["Manzanas", "Uvas", "Fresas"];

for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listafrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}

// Objeto
var persona = { nombre: "Juan", telefono: "1234-5678" };

// Array de objetos
var contactos = [
    { nombre: "Juan", telefono: "1234-5678" },
    { nombre: "Carmen", telefono: "8765-4321" }
];

contactos.push(persona); // Agregando un elemento

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {

    let li = "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    document.getElementById("listapersonas").innerHTML += li;
}

