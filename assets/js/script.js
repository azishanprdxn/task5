// Javascript here
var newRequest = new XMLHttpRequest(); // AJAX Request
var fetchedData, length;
var i = 0;
var count = 6;
var displayedAll = false;

newRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
newRequest.send();
newRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Stores the data fetched in fetchedData
    fetchedData = JSON.parse(this.responseText);
    length = fetchedData.length;
    // Displays the initial 6 data
    for (i = 0; i < 6; i++) {
      document.getElementById('data').innerHTML +=
        "<tr>" +
        "<td>" + fetchedData[i].id + ". " + fetchedData[i].title + "</td>" +
        "<td>" + fetchedData[i].body + "</td>" +
        "</td>";
    }
  }
}

function getData() {
  displayInfo();
  count = count + 6; // Increment count by 6
}

function displayInfo() {
  // Displays 6 instances of the data
  for (i = count; i < count + 6 && i < length; i++) {
    document.getElementById('data').innerHTML +=
      "<tr>" +
      "<td>" + fetchedData[i].id + ". " + fetchedData[i].title + "</td>" +
      "<td>" + fetchedData[i].body + "</td>" +
      "</td>";
  }

  // To hide the button when data has been reached
  if (count >= (length - 4)) {
    displayedAll = true; // Sets displayedAll to true
    if (displayedAll) {
      document.getElementsByTagName('button')[0].style.display = "none"; // Hides the button
      document.getElementsByTagName('p')[0].style.display = "block"; // Displays the text
    }
  }
}