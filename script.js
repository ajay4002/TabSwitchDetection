// Element to display the status
var statusText = document.getElementById("status");

// Tab switch tracking variables
var tabSwitchCount = 0;
var maxTabSwitches = 10; 

// Other window usage tracking variables
var windowSwitchCount = 0; 
var maxWindowSwitches = 10;

// Combined violation tracking
var totalViolationCount = 0;
var maxTotalViolations = 10; // Maximum combined violations

// Function to handle violations
function handleViolation(type) {
  if (type === "tab") {
    tabSwitchCount++;
    totalViolationCount++;
    statusText.textContent = `Tab switch detected (${tabSwitchCount} times). Remaining chances: ${maxTotalViolations - totalViolationCount}`;
    statusText.style.color = "red";
    alert(`Warning: Tab switch detected! Remaining chances: ${maxTotalViolations - totalViolationCount}`);
  } else if (type === "window") {
    windowSwitchCount++;
    totalViolationCount++;
    statusText.textContent = `Window switch detected (${windowSwitchCount} times). Remaining chances: ${maxTotalViolations - totalViolationCount}`;
    statusText.style.color = "orange";
    alert(`Warning: Other window usage detected! Remaining chances: ${maxTotalViolations - totalViolationCount}`);
  }

  // Check if limits are exceeded
  if (totalViolationCount >= maxTotalViolations) {
    alert("You have exceeded the maximum allowed violations. The test will now close.");
    window.close(); // An attempt to close the tab
  }
}

// Detect tab visibility change
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    handleViolation("tab");
  } else {
    statusText.textContent = "You are currently viewing this tab.";
    statusText.style.color = "green";
  }
});

// Detect focus loss and regain
window.addEventListener("blur", function () {
  handleViolation("window");
});

window.addEventListener("focus", function () {
  statusText.textContent = "You are back to this window.";
  statusText.style.color = "blue";
});
