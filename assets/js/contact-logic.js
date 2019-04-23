$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDef7wf6gCD8LRai6bf5Nd7DDjQoA9JI9I",
        authDomain: "portfolio-db-9e35d.firebaseapp.com",
        databaseURL: "https://portfolio-db-9e35d.firebaseio.com",
        projectId: "portfolio-db-9e35d",
        storageBucket: "portfolio-db-9e35d.appspot.com",
        messagingSenderId: "428238056598"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    $(".submitButton").click(function() {
        let submittedName = $("#name").val();
        let submittedEmail = $("#email").val();
        let submittedMessage = $("#message").val();

        if(submittedName === null || submittedName === "" || submittedEmail === null || submittedEmail === "" || submittedMessage === null || submittedMessage === "") {
            console.log("The user didn't input every field.");
            break;
        } else {
            if(!submittedEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
                console.log("I don't think that's a valid email address.");
                break;
            } 
            if(!submittedName.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
                console.log("This name can't be saved.");
                break;
            }
        }

        database.ref("/inquiries").set({
            name: submittedName,
            email: submittedEmail,
            message: submittedMessage
        });
    });
});