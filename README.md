## My Web Application (DeskBuddy)

- [My Web Application (DeskBuddy)](#my-web-application-deskbuddy)
- [General Info](#general-info)
- [Technologies](#technologies)
- [Content](#content)
- [Acknowledgements](#acknowledgements)

## General Info
The contents in this folder is used by Belal Kourkmas, Christie Tsang, and Stan Hung to create a browser based web application to remind users to take a break during their busy work schedule. In order to create this web application, we used HTML, CSS, Javascript, jQuery, Bootstrap, and Firestore.

An API from Google, and Firebase was used for implementing specific functionalities in our project. All photos used in our project were downloaded
from a free stock photo website at: https://unsplash.com.


## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap
* JQuery
* Node
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file

├── README.md                # README



It has the following subfolders and files:
├── .git                     # Folder for git repo
├── html                     # Folder for HTML files
    /index.html              # landing HTML file, this is what users see when you first come to the website
    /break-page.html         # Break page HTML, this is where users get ideas for break activities
    /profile.html            # Profile HTML, this is where users view and change their profile information
    /notificationtype.html   # Notification type setting HTML, this is where users set how they want to receive notifications
    /notificationtime.html   # Notification time setter HTML, this is where users select the time and day they want to receive notifications
    /404.html                # 404 page HTML, this is displayed when the site is unavailable
    /completed-setup.html    # Completed Setup HTML, this is the page users see when they complete the setup process
    /login.html              # Login page HTML, this is where users log into DeskBuddy
    /main.html               # Main HTML page, this is DeskBuddy's home page
├── images                   # Folder for images
    /desk.jpg                # index HTML background
    /DeskBuddylogo.png       # Desk Buddy Logo
    /exercise.jpg            # Exercise thumbnail
    /meditation.jpg          # Meditation thumbnail
    /nutrition.jpg           # Food thumbnail
    /profile.png             # Default profile picture
    /stretch.jpg             # Stretch thumbnail
    /surface.png             # Notification time background
    /water.jpg               # Water thumbnail
├── scripts                  # Folder for scripts
    /break-page.js           # JS for break-page
    /firebaseAPI.js          # API keys
    /login.js                # JS for the sign in process and to create and access user 
    /main.js                 # JS for main page to handle reading and querying from Firestore, as well as the notification countdown
    /mdtimepicker.js         # JS for the pop up clock interface to select time
    /notificationtime.js     # JS to write information for selected times to Firestore
    /notificationtype.js     # JS to write information for selected notification type to Firestore
    /profile.js              # JS to read and write information from user profile to Firestore
├── styles                   # Folder for CSS files
    /login.css               # CSS for login page
    /mdtimepicker.css        # CSS for time picker
    /my_style.css            # General CSS for all other HTML pages
├──.vscode
    /settings.json
    
    
Firebase hosting files: 
├── .firebaserc...
├── firebase.json
├── Deskbuddy.code-workspace
├── .firebase
    /hosting..cache
├── .github
    ├── workflows
        /firebase-hosting-merge.yml
        /firebase-hosting-pull-request.yml
├── node.modules...          # All installed node modules
```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation


## Acknowledgements
* <a href="https://unsplash.com/"> Photos and Images </a>
* <a href="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css"> Firebase CSS </a>
* <a href="https://fonts.googleapis.com/icon?family=Material+Icons"> Google Fonts </a>
* <a href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"> Bootstrap CSS </a>
* <a href="https://unsplash.com"> Stock Images </a>
* <a href="https://www.jqueryscript.net/time-clock/Material-Time-Picker-Plugin-jQuery-MDTimePicker.html"> Time picker </a>
* <a href="https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript"> Timer tutorial </a>