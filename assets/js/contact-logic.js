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
        event.preventDefault();
        $("#user-warning").css("color", "darkred");

        let submittedName = $("#name").val();
        let submittedEmail = $("#email").val();
        let submittedMessage = $("#message").val();

        if(submittedName === null || submittedName === "" || submittedEmail === null || submittedEmail === "" || submittedMessage === null || submittedMessage === "") {
            $("#user-warning").text("All fields are required to submit.");
            $("#user-warning").attr("class", "visible");
            fadeOut();
            return;
        } else {
            if(!submittedEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
                $("#user-warning").text("The email doesn't seem to be a valid format.");
                $("#user-warning").attr("class", "visible");
                fadeOut();
                return;
            } 
            if(!submittedName.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
                $("#user-warning").text("This name uses characters that can't be stored in my database.");
                $("#user-warning").attr("class", "visible");
                fadeOut();
                return;
            }
            $("#user-warning").text("Inquiry submitted succesfully!");
            $("#user-warning").css("color", "green");
            $("#user-warning").attr("class", "visible");
            fadeOut();
        }

        database.ref("/inquiries").push({
            name: submittedName,
            email: submittedEmail,
            message: submittedMessage
        });
    });

    function fadeOut() {
        setTimeout(function(){ 
            $("#user-warning").attr("class", "hidden");
        }, 2000);
    }
});