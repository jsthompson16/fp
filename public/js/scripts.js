//const user = db.get('users').find({ username: document.getElementById('current-username').value}).value();
// user.score += 63;
// db.get( 'users' ).push(user).write();

const viewLeaderboard = function() {
    document.getElementById('table').style.display = "flex";
    document.getElementById('back-button').style.display = "flex";
    document.getElementById('main-button-container').style.display = "none";
    document.getElementById('leaderboard-button').style.display = "none";

    fetchLeaderboard();
    return false;
};

const viewGame = function() {
    document.getElementById('table').style.display = "none";
    document.getElementById('back-button').style.display = "none";
    document.getElementById('main-button-container').style.display = "flex";
    document.getElementById('leaderboard-button').style.display = "flex";
};

const fetchLeaderboard = async function() {
    const response = await fetch('/leaderboard', {method: 'GET'});
    const data = await response.json();
    const users = data.users;

    let HTMLDiv = document.getElementById("leaderboard");

    HTMLDiv.innerHTML = '<tr>\n' + '<th>Username</th>\n' +
        '<th>Score</th>\n' + '</tr>';

    for (let i = 0; i < users.length; i++) {
        const currentUser = users[i];
        let row = '<tr>\n';
        row += (`<td> ${currentUser.username} </td>\n`);
        row += (`<td> ${currentUser.score} </td>\n`);
        row += '</tr>';
        HTMLDiv.innerHTML += row;
    }

    return false;
};

const login = function (e) {
    debugger;
    e.preventDefault();

    const loginInfo = {
        username: document.getElementById("login-username").value,
        password: document.getElementById("password").value
    };

    const body = JSON.stringify(loginInfo);
    fetch( '/login', {
        method:'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
    })
    .then( function( response ) {
        document.getElementById('main-button-container').style.display = "flex";
        document.getElementById('leaderboard-button').style.display = "flex";
        document.getElementById('login').style.display = "none";
        document.getElementById('current-username').value = loginInfo.username;
    });
};

function findEnemy(tier) {
    const random = Math.random();
    let filepath;

    if (tier === 1) {
        switch(true) {
            case random > 0.9:
                filepath = "../img/bokoblin.png";
                break;
            case (random > 0.8 && random <= 0.9):
                filepath = "../img/bomb.png";
                break;
            case (random > 0.7 && random <= 0.8):
                filepath = "../img/eggrobot.png";
                break;
            case (random > 0.6 && random <= 0.7):
                filepath = "../img/goomba.png";
                break;
            case (random > 0.5 && random <= 0.6):
                filepath = "../img/heartless.png";
                break;
            case (random > 0.4 && random <= 0.5):
                filepath = "../img/met.png";
                break;
            case (random > 0.3 && random <= 0.4):
                filepath = "../img/pacman-ghost.png";
                break;
            case (random > 0.2 && random <= 0.3):
                filepath = "../img/rattata.png";
                break;
            case (random > 0.1 && random <= 0.2):
                filepath = "../img/slime.png";
                break;
            case random <= 0.1:
                filepath = "../img/waddle-dee.png";
                break;
        }
    }
    if (tier === 2) {
        switch(true) {
            case random > 0.8:
                filepath = "../img/bowser-jr.png";
                break;
            case (random > 0.6 && random <= 0.8):
                filepath = "../img/charizard.png";
                break;
            case (random > 0.4 && random <= 0.6):
                filepath = "../img/shadow.png";
                break;
            case (random > 0.2 && random <= 0.4):
                filepath = "../img/zero.png";
                break;
            case random <= 0.2:
                filepath = "../img/waddle-dee.png";
                break;
        }
    }
    if (tier === 3) {
        switch(true) {
            case random > 0.67:
                filepath = "../img/bowser.png";
                break;
            case (random > 0.33 && random <= 0.67):
                filepath = "../img/ganondorf.png";
                break;
            case random <= 0.33:
                filepath = "../img/eggman.png";
                break;
        }
    }

    return filepath;
}