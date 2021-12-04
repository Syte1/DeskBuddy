
        $(document).ready(function () {
            $('.timepicker').mdtimepicker(); //Initializes the time picker
        });

        //Function to check which days have been checked off to store
        function SubmitInformation() {
            if (document.querySelector('input[name="Monday"]:checked') != null) {
                var Monday = document.querySelector('input[name="Monday"]:checked').
                value;
            } else var Monday = "off"

            if (document.querySelector('input[name="Tuesday"]:checked') != null) {
                var Tuesday = document.querySelector('input[name="Tuesday"]:checked').
                value;
            } else var Tuesday = "off"

            if (document.querySelector('input[name="Wednesday"]:checked') != null) {
                var Wednesday = document.querySelector('input[name="Wednesday"]:checked').
                value;
            } else var Wednesday = "off"

            if (document.querySelector('input[name="Thursday"]:checked') != null) {
                var Thursday = document.querySelector('input[name="Thursday"]:checked').
                value;
            } else var Thursday = "off"

            if (document.querySelector('input[name="Friday"]:checked') != null) {
                var Friday = document.querySelector('input[name="Friday"]:checked').
                value;
            } else var Friday = "off"

            if (document.querySelector('input[name="Saturday"]:checked') != null) {
                var Saturday = document.querySelector('input[name="Saturday"]:checked').
                value;
            } else var Saturday = "off"

            if (document.querySelector('input[name="Sunday"]:checked') != null) {
                var Sunday = document.querySelector('input[name="Sunday"]:checked').
                value;
            } else var Sunday = "off"

            //Check for time data and write to database
            if (document.getElementById('firstclock') != undefined) {
                console.log("this is not null")
                var starttime = document.getElementById('firstclock').value;
            } else document.getElementById('firstclock').value.update = "pick a time"
            var starttime = document.getElementById('firstclock').value;
            var endtime = document.getElementById('secondclock').value;
            if (!starttime) {
                document.getElementById('firstclock').value = "Please enter a time";
            }
            if (!starttime) {
                document.getElementById('secondclock').value = "Please enter a time";
            }

            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    var currentUser = db.collection("users").doc(user.uid)
                    var userID = user.uid;
                    //console.log(userID)
                    //get the document for current user.
                    currentUser.get()
                        .then(userDoc => {
                            //get user Email
                            // var userEmail = userDoc.data().email;
                            // Start a new collection and add all days and time data in it.
                            db.collection("DaysNotified").doc(userID).set({
                                "UserID": userID,
                                "Monday": Monday,
                                "Tuesday": Tuesday,
                                "Wednesday": Wednesday,
                                "Thursday": Thursday,
                                "Friday": Friday,
                                "Saturday": Saturday,
                                "Sunday": Sunday,
                                "StartTime": starttime,
                                "EndTime": endtime
                            });
                            setTimeout(() => {
                                window.location.href = 'html/notificationtype.html';
                            }, 1000);
                        })
                } else {
                    // No user is signed in.
                    console.log("no user signed in");
                }
            })
        }