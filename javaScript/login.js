// selector for  the login form
const loginForm = document.getElementById("loginform");

// add a submit event listener to the form
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  // get the email and password values from the form inputs
  const emailaddress = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;
  console.log(emailaddress, password);

  try {
    // fetch the list of users from the API endpoint
    const response = await fetch(
      "https://lazy-puce-fawn-yoke.cyclic.app/users/"
    );
    const allusers = await response.json();
    // find the user with the matching email and password
    const users = allusers.find(
      (users) =>
        users.emailaddress === emailaddress && users.password === password
    );
    console.log(users.emailaddress, users.password);

    if (!users) {
      // if the user is not found, show an error message
      alert("Invalid email or password");
      window.location.replace("/sign-in.html");
      return;
    }
    // if the user is found, store their information in local storage
    localStorage.setItem("currentUser", JSON.stringify(users));

    // redirect the user to the dashboard page
    window.location.href = "./users/index.html";
  } catch (error) {
    console.error(error);
    alert("login has not completed successfully");
  }
});
