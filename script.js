<script>
    // Firebase configuration (Replace with your actual Firebase project credentials)
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Register new user
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("Registration Successful!");
                console.log("User registered:", userCredential.user);
            })
            .catch(error => {
                alert("Error: " + error.message);
                console.error("Registration Error:", error);
            });
    });

    // Login user
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("Login Successful!");
                console.log("User logged in:", userCredential.user);
                document.getElementById("authMessage").innerText = "Welcome, " + userCredential.user.email;
            })
            .catch(error => {
                alert("Error: " + error.message);
                console.error("Login Error:", error);
            });
    });

    // Check authentication state (Optional)
    auth.onAuthStateChanged(user => {
        if (user) {
            document.getElementById("authMessage").innerText = "Logged in as " + user.email;
        } else {
            document.getElementById("authMessage").innerText = "Not logged in";
        }
    });
</script>
