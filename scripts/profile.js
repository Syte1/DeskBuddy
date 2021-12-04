// Returns element object with matching string id
var FirstName = document.getElementById("f_name");
var LastName = document.getElementById("l_name");
var PhoneNum = document.getElementById("phone_num");
var Address = document.getElementById("address");
var City = document.getElementById("city");
var Country = document.getElementById("country");
var Region = document.getElementById("region");

//Function that allows button to disable or enable the input text boxes
function EditButton() {
    if (FirstName.disabled == false && LastName.disabled == false && PhoneNum.disabled == false && Address
        .disabled == false && City.disabled == false && Country.disabled == false && Region.disabled == false) {
        FirstName.disabled = true;
        LastName.disabled = true;
        PhoneNum.disabled = true;
        Address.disabled = true;
        City.disabled = true;
        Country.disabled = true;
        Region.disabled = true;
    } else {
        FirstName.disabled = false;
        LastName.disabled = false;
        PhoneNum.disabled = false;
        Address.disabled = false;
        City.disabled = false;
        Country.disabled = false;
        Region.disabled = false;
    }

};

//Writes data to Firestore based on user input
function profileEdit() {
    let FirstName = document.getElementById("f_name").value;
    let LastName = document.getElementById("l_name").value;
    let PhoneNum = document.getElementById("phone_num").value;
    let Address = document.getElementById("address").value;
    let City = document.getElementById("city").value;
    let Country = document.getElementById("country").value;
    let Region = document.getElementById("region").value;


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            var userEmail = user.email;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get user Email

                    db.collection("users").doc(userID).update({
                        UserID: userID,
                        UserEmail: userEmail,
                        FirstName: FirstName,
                        LastName: LastName,
                        name: FirstName + " " + LastName,
                        PhoneNum: PhoneNum,
                        Address: Address,
                        City: City,
                        Country: Country,
                        Region: Region
                    });

                })
        } else {
            // No user is signed in.
            console.log("No user signed in");
        }
    });
}
//Reads data from Firestore to populate the text fields as placeholders
function insertInfo() {
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
                    var First_Name = userDoc.data().FirstName;
                    //console.log(user_Name);
                    document.getElementById("name-goes-here").innerText =
                        user_Name; //using javascript
                    $("#name-goes-here").text(user_Name); //using jquery
                })
            //Gets the data appropriate data from Firestore
            db.collection("users").get()
                .then(snap => {
                    var i = 1;
                    snap.forEach(doc => {
                        var fname = doc.data().FirstName;
                        var lname = doc.data().LastName;
                        var address = doc.data().Address;
                        var phone = doc.data().PhoneNum;
                        var city = doc.data().City;
                        var country = doc.data().Country;
                        var region = doc.data().Region;


                        //Replaces placeholders with user data
                        if (!fname) {
                            document.getElementById("f_name").placeholder;
                        } else {
                            document.getElementById("f_name").placeholder = fname;
                            $("#f_name").text(fname);
                        }
                        if (!lname) {
                            document.getElementById("l_name").placeholder
                        } else {
                            document.getElementById("l_name").placeholder = lname;
                            $("#l_name").text(lname);
                        }
                        if (!address) {
                            document.getElementById("address").placeholder
                        } else {
                            document.getElementById("address").placeholder = address;
                            $("#address").text(address);
                        }
                        if (!country) {
                            document.getElementById("phone_num").placeholder
                        } else {
                            document.getElementById("phone_num").placeholder = phone;
                            $("#phone_num").text(phone);
                        }
                        if (!city) {
                            document.getElementById("city").placeholder
                        } else {
                            document.getElementById("city").placeholder = city;
                            $("#city").text(city);
                        }
                        if (!country) {
                            document.getElementById("country").placeholder;
                        } else {
                            document.getElementById("country").placeholder = country;
                            $("#country").text(country);
                        }
                        if (!region) {
                            document.getElementById("region").placeholder;
                        } else {
                            document.getElementById("region").placeholder = region;
                            $("#region").text(region);
                        }

                        // Generates Custom profile image with user initials

                        var initials = fname.charAt(0) + "" + lname.charAt(0);

                        document.getElementById("CustomProfileImage").innerHTML = initials;
                        document.getElementById("CustomProfileImage").style.display = "block";

                    })
                })
        } else {
            // No user is signed in.
            console.log("No user logged in");
        }
    });
}

insertInfo();