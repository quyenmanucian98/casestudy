let Player = function (name, age, height, location, attack, defend, speed, skill, physical, nationality) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.location = location;
    this.attack = attack;
    this.defend = defend;
    this.speed = speed;
    this.skill = skill;
    this.physical = physical;
    this.nationality = nationality;
    this.info = "";
    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getAge = function () {
        return this.age;
    };
    this.setAge = function (value) {
        this.age = value;
    };
    this.getHeight = function () {
        return this.height;
    };
    this.setHeight = function (value) {
        this.height = value;
    };
    this.getlocation = function () {
        return this.location;
    };
    this.setLocation = function (value) {
        this.location = value;
    };
    this.getAttack = function () {
        return this.attack;
    };
    this.setAttack = function (value) {
        this.attack = value;
    };
    this.getDefend = function () {
        return this.defend;
    };
    this.setDefend = function (value) {
        this.defend = value;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.setSpeed = function (value) {
        this.speed = value;
    };
    this.getSkill = function () {
        return this.skill;
    };
    this.setSkill = function (value) {
        this.skill = value;
    };
    this.getPhysical = function () {
        return this.physical;
    };
    this.setPhysical = function (value) {
        this.physical = value;
    };
    this.getNationality = function () {
        return this.nationality;
    };
    this.setNationality = function (value) {
        this.nationality = value;
    };
    this.getInfo = function () {
        let str = `<h2 style="color: magenta">
Player Name: ${this.name}
<br>Player Age: ${this.age}
<br>Player Height: ${this.height}
<br>Player Position: ${this.location}
<br>Attack Index: ${this.attack}
<br>Defend Index: ${this.defend}
<br>Speed Index: ${this.speed}
<br>Skill Index: ${this.skill}
<br>Physical Index: ${this.physical}
<br>Player Nationality: ${this.nationality}</h2>`;
        return str;
    };
};

let Club = function (name, players, stadium, coach) {
    this.name = name;
    this.players = [];
    this.stadium = stadium;
    this.coach = coach;
};
// let Player = function (name, age, height, location, attack, defend, speed, skill, physical, nationality) {

let club = new Club("Manchester United", [], "Old Trafford", "Ole Gunnar Solskjær");
let ronaldo = new Player("Cristiano Ronaldo");
document.getElementById('nameclub').innerText = club.name;
document.getElementById('stadium').innerHTML = club.stadium;
document.getElementById('coach').innerHTML = club.coach;
loading(club);
console.log(club);

function addPlayer() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let location = document.getElementById("location").value;
    let attack = document.getElementById("attack").value;
    let defend = document.getElementById("defend").value;
    let speed = document.getElementById("speed").value;
    let skill = document.getElementById("skill").value;
    let physical = document.getElementById("physical").value;
    let nationality = document.getElementById("nationality").value;
    let newPlayer = new Player(name, age, height, location, attack, defend, speed, skill, physical, nationality);
    newPlayer.info = newPlayer.getInfo();
    club.players.push(newPlayer);
    display();
    saveData(club.players);
}

function display() {
    let paint = document.getElementById('nameplayer');
    paint.innerHTML = "";
    for (let i = 0; i < club.players.length; i++) {
        paint.innerHTML += `
        <h2 style="color: lawngreen"><button onclick="sellPlayer(${i})">SELL</button>
        <button onclick="document.getElementById('info').innerHTML = club.players[${i}].info">TOTAL</button>
        <button onclick="editPlayer(club.players[${i}])" >EDIT</button><span>${club.players[i].name}</span><br></h2>
         `;
    }
    saveData(club.players);
}

function sellPlayer(index) {
    club.players.splice(index, 1);
    console.log(club.players);
    display();
    document.getElementById('info').innerHTML = "";
    saveData(club.players);
}

function editPlayer(index) {
    for (let i = 0; i < club.players.length; i++) {
        club.players[i].name = prompt("Nhập lại tên cầu thủ");
        club.players[i].age = prompt("Nhập lại tuổi của cầu thủ");
        club.players[i].height = prompt("Nhập lại chiều cao của cầu thủ");
        club.players[i].location = prompt('Nhập lạ vị trí thi đấu của cầu thủ');
        club.players[i].attack = prompt("Nhập lại chỉ số tấn công của cầu thủ");
        club.players[i].defend = prompt("Nhập lại chỉ số phòng thủ của cầu thủ");
        club.players[i].speed = prompt("Nhập lại chỉ số của cầu thủ");
        club.players[i].skill = prompt("Nhập lại chỉ số kỹ thuật của cầu thủ");
        club.players[i].physical = prompt("Nhập lại chỉ số sức mạnh của cầu thủ");
        club.players[i].nationality = prompt("Nhập lại quốc tịch của cầu thủ");
        display();
        document.getElementById('info').innerHTML = "";
    }
    saveData(club.players);
}


function saveData(arr) {
    localStorage.setItem("save", JSON.stringify(arr));
}

function loadData(arr) {
    return JSON.parse(localStorage.getItem("save"));
}

function loading(club) {
    if (typeof (Storage) !== "undefined") {
        club.players = loadData(club.players);
        if (club.players == null) {
            club.players = [];
        }
        display();
    } else {
        alert("Sorry! No Web Storage support..");
    }
}

let obj = {
    foo: function () {
        return "I'm a function!";
    }
};

let json = JSON.stringify(obj, function (key, value) {
    if (typeof value === 'function') {
        return value.toString();
    } else {
        return value;
    }
});

console.log(json);