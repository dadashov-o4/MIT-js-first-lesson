const telebeler = [
    {
        name: "Sadiq",
        surname: "Nuriyev",
        isStudent: true
    },
    {
        name: "Kenan",
        surname: "Babayev",
        isStudent: false
    },
    {
        name: "Amin",
        surname: "Quliyev",
        isStudent: true,
    }
];

function newTable(telebeler) {
    let table = document.getElementById("mytable");
    for (i = 0; i < telebeler.length; i++) {
        let row = `<tr>
            <td>${telebeler[i].name}</td>
            <td>${telebeler[i].surname}</td>
            <td>${telebeler[i].isStudent}</td>
        </tr>`
        // boolean ni if le evezlemek.....
        table.innerHTML = table.innerHTML + row;
        return(newTable);
    }
}

console.log(newTable(telebeler));



// for (i = 0; i < telebeler.length; i++){
//     var table = document.getElementById("mytable");

// }

