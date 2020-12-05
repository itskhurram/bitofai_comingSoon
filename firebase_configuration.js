// Initialize Firebase
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var config = {
    apiKey: "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
    authDomain: "kkkkkkkkkkkkkkk.firebaseapp.com",
    databaseURL: "https://kkkkkkkkkkkkkkk.firebaseio.com",
    projectId: "kkkkkkkkkkkkkkk",
    storageBucket: "kkkkkkkkkkkkkkk.appspot.com",
    messagingSenderId: "311111111119",
    appId: "1:316475771619:web:ee832c0835kkkkkkkkkkkkkkk"
  
};
firebase.initializeApp(config);
var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

$(document).ready(function () {

    $('#notifs-form-btn').click(function (e) {
        var is_present = false;
        email = $('#form-email').val();
        if (validateEmail(email)) {
            db.collection('bitofAIEmails').get().then(function (qs) {
                qs.forEach(function (element) {
                    if (element.data()['ID'] == email) {
                        is_present = true;
                    }
                });

                if (is_present == false) {
                    db.collection("bitofAIEmails").add({
                        'ID': email,
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);
                            alert('Email has been added. Thank you for your interest.')
                            $("#notifs-form-btn").text("Notified!");
                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });
                }
                else
                {
                    alert('Email already has been added. Thank you for your interest.');
                }
            });

        }
        else {
            alert('Invalid Email');
        }
    });

});
