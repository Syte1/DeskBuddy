function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            //console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    //console.log(user_Name);
                    document.getElementById("username").innerText = user_Name; //using javascript
                    $("#name-goes-here").text(user_Name); //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}
function displayRandomQuote() {
    // console.log("display calls")
    db.collection("quotes")
        .where("id", "==", Math.floor(Math.random() * 100))
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                let n = doc.data().quote;
                let quote = "<p> " + n + "</p>";
                let author = doc.data().name;
                $("#author-goes-here").html(author);
                $("#quote-goes-here").html(quote);
            })
        })
}


insertName();
// The data/time we want to countdown to
// var countDownDate = new Date("Nov 19, 2021 00:00").getTime();
// var frequency = 1.8e+6 + 1500
var frequency = 30000 + 1500

function hide_button() {
    document.getElementById("end").innerHTML = ""
    $('#myModal').modal('hide');
}

function refreshtime() {
    countDownDate = new Date().getTime() + frequency
}
var countDownDate = new Date().getTime() + frequency;
// Run myfunc every second

setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    // document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("mins").innerHTML = minutes + "m "
    document.getElementById("secs").innerHTML = seconds + "s "

    // Display the message when countdown is over

    if (timeleft < 1) {
        refreshtime()
        displayRandomQuote();
        $('#myModal').modal('show');

        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Time to take a break!"
        return;
    }
}, 1000)

async function getCSVdata() {
    const response = await fetch("quotes.csv"); //send get request
    const data = await response.text(); //get file response
    const list = data.split('\n').slice(1); //get line 
    list.forEach(row => {
        const columns = row.split(","); //get token 
        const id = parseInt(columns[0]); // id
        const author = columns[1]; // author name
        const quote = columns[2]; //quote
        console.log(author, quote)
        db.collection("quotes").add({ //write to firestore
            id: id,
            name: author,
            quote: quote
        })
    });
}