const accounts = [
    {
        name : "Ana",
        password : "1111",
        accounts : [
        {
         name : "debito",
         balance : 2000
        },
        {
         name : "credito",
         balance : 1200
        }
       ]
    },
    {
        name : "Carlos",
        password : "2222",
        accounts : [
        {
         name : "debito",
         balance : 1200
        },
        {
         name : "credito",
         balance : 2548
        }
      ]
    },
    {
        name : "Marlon",
        password : "3333",
        accounts : [
        {
         name : "debito",
         balance : 3500
        },
        {
         name : "credito",
         balance : 2950
        }
       ]
    }
];

function login(form) {
    const userField = form.user.value;
    const password = form.Password.value;

    user = accounts.find((account) =>
    account.name === userField &&
    account.password === password
    )

    if (!user) {
        alert("error de password");
        return;
    }
    form.style.display = "none"
    document.querySelector(".cuenta").style.display = "block";
    document.querySelector("#c1").value = user.accounts[0].balance;
    document.querySelector("#c2").value = user.accounts[1].balance;
    console.log(document.querySelector("#c1").value)
    console.log(user.account[0].balance)
}
function formula1() {
    var CantidadT = parseInt(document.getElementById('cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (Cantidad1 - CantidadT)
    document.getElementById('c2').value = (Cantidad2 + CantidadT)
}
function formula2() {
    var CantidadT = parseInt(document.getElementById('cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (Cantidad1 + CantidadT)
    document.getElementById('c2').value = (Cantidad2 - CantidadT)
}
function formula3() {
    var CantidadT = parseInt(document.getElementById('cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (Cantidad1 + CantidadT)  
} 
function formula4() {
    var CantidadT = parseInt(document.getElementById('cant').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (Cantidad2 + CantidadT)  
} 
function formula5() {
    var CantidadT = parseInt(document.getElementById('retiro').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (Cantidad1 - CantidadT)  
} 
function formula6() {
    var CantidadT = parseInt(document.getElementById('retiro').value);
    var Cantidad1 = parseInt(document.getElementById('c1').value);
    var Cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (Cantidad2 - CantidadT)  
} 