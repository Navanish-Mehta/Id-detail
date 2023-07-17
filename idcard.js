function toggleDetails(profileId) {
    var details = document.getElementById("profile-details" + profileId);
    var toggle = document.getElementById("profile-toggle" + profileId);

    if (details.style.display === "none") {
      details.style.display = "block";
      toggle.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      toggle.textContent = "More Details";
    }
  }

  document.getElementById("profile-toggle1").addEventListener("click", function() {
    toggleDetails(1);
  });

  document.getElementById("profile-toggle2").addEventListener("click", function() {
    toggleDetails(2);
  });