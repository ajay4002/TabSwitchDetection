var statusText = document.getElementById("status");
    var tabSwitchCount = 0; // Initialize tab switch counter
    var maxTabSwitches = 5; // Maximum allowed tab switches

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        tabSwitchCount++;
        statusText.textContent = `You have switched tabs ${tabSwitchCount} times. Remaining chances: ${maxTabSwitches - tabSwitchCount}`;
        statusText.style.color = "red";
        alert(`Warning: Tab switch detected! Remaining chances: ${maxTabSwitches - tabSwitchCount}`);

        if (tabSwitchCount >= maxTabSwitches) {
          alert("You have exceeded the maximum allowed tab switches. The test will now close.");
          window.close(); // Attempt to close the tab
        }
      } else {
        statusText.textContent = "You are currently viewing this tab.";
        statusText.style.color = "green";
      }
    });