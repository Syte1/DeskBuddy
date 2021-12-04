var vibrateSound = document.getElementById("vibrateSound");
var sound = document.getElementById("soundOnly");
var vibrate = document.getElementById("vibrateOnly");
var mute = document.getElementById("mute");
var text = document.getElementById("testcolor");

//Function to enable or disable the toggle switch
function enablebtn() {
    if (vibrateSound.disabled == false && sound.disabled == false && vibrate.disabled == false && mute.disabled ==
        false) {
        vibrateSound.disabled = true;
        sound.disabled = true;
        vibrate.disabled = true;
        mute.disabled = true;
        text.style.color = "grey";
    } else {
        vibrateSound.disabled = false;
        sound.disabled = false;
        vibrate.disabled = false;
        mute.disabled = false;
        text.style.color = "black";
    };

};

//Function that saves the value of radio buttons to Firestore
function saveUserInfo() {
    let NotificationType = document.querySelector('input[name="type"]:checked').value;

    if (document.querySelector('input[name="toggle"]:checked') != null) {
        var ToggleOnOff = document.querySelector('input[name="toggle"]:checked').value;
    } else {
        var ToggleOnOff = "off"
    }

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get user Email
                    var userEmail = userDoc.data().email;
                    // Start a new collection and add all data in it.
                    db.collection("Notifications").doc(userID).set({
                        NotificationType: NotificationType,
                        UserID: userID,
                        UserEmail: userEmail,
                        ToggleOnOff: ToggleOnOff
                    });
                    setTimeout(() => {
                        window.location.href = 'html/completed-setup.html';
                    }, 1000);
                })
        } else {
            // No user is signed in.
            console.log("No user signed in");
        }
    });
}