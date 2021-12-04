## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

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
├── index.html               # landing HTML file, this is what users see when you come to url
├── README.md                # README
├── 404.html                 # 404 page HTML, this is displayed when the site is unavailable
├── break-page.html          # Break page HTML, this is where breaks a read from the database
├── completed-setup.html     # Completed Setup HTML, this is the finish page for setup
├── login.html               # Login page HTML, this is where users log in
├── main.html                # Main HTML page, Deskbuddy home menu
├── notificationtime.html    # Notification time setter HTML, this is where time and day is    selected
├── notificationtype.html    # Notification type setting HTML, this is where method of      reminder set
├── profile.html             # Profile HTML, this is where users view and change their profile

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder to store images
    /desk.jpg                # Index HTML background
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
    /login.js                # JS for login
    /main.js                 # JS for main
    /mdtimepicker.js         # JS for time picker
    /notificationtime.js     # JS for notification times
    /notificationtype.js     # JS for notification types
    /profile.js              # JS for profile
├── styles                   # Folder for styles
    /login.css               # CSS for login page
    /mdtimepicker.css        # CSS for time picker
    /my_style.css            # General CSS for all HTML pages
├──.vscode
    settings.json
Firebase hosting files: 
├── .firebaserc...
├── firebase.json
├── Deskbuddy.code-workspace
├── .firebase
    hosting..cache
├── .github
    ├── workflows
        firebase-hosting-merge.yml
        firebase-hosting-pull-request.yml
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