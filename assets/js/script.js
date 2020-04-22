// Javascript here
var newRequest = new XMLHttpRequest(); // AJAX Request
var fetchedData, length;
var i = 0;
var count = 6;
var displayedAll = false;
document.getElementsByTagName('button')[0].onclick = getData;

newRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
newRequest.send();
newRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Stores the data fetched in fetchedData
    fetchedData = JSON.parse(this.responseText);
    length = fetchedData.length;
    // Displays the initial 6 data
    for (i = 0; i < 6; i++) {
      // Calling createTable function
      createTable(fetchedData[i].id, fetchedData[i].title, fetchedData[i].body);
    }
  }
}

function getData() {
  displayData();
  count = count + 6; // Increment count by 6
}

function displayData() {
  // Displays 6 instances of the data
  for (i = count; i < count + 6 && i < length; i++) {
    // Calling createTable function
    createTable(fetchedData[i].id, fetchedData[i].title, fetchedData[i].body);
  }

  // hides the button when data has been reached
  if (count >= (length - 4)) {
    displayedAll = true; // Sets displayedAll to true
    if (displayedAll) {
      document.getElementsByTagName('button')[0].style.display = "none"; // Hides the button
      document.getElementsByTagName('p')[0].style.display = "block"; // Displays the text
    }
  }
}

// Creates table
function createTable(id, title, description) {
  // Creation of table using DOM
  var table = document.getElementById('data');
  var tableRow = document.createElement('tr');
  var tableColumn1 = document.createElement('td');
  var tableColumn2 = document.createElement('td');
  table.append(tableRow);
  tableRow.append(tableColumn1);
  tableRow.append(tableColumn2);
  var dataId = document.createTextNode(id);
  var dataSpace = document.createTextNode(". ");
  var dataTitle = document.createTextNode(title);
  var dataDescription = document.createTextNode(description);
  tableColumn1.append(dataId);
  tableColumn1.append(dataSpace);
  tableColumn1.append(dataTitle);
  tableColumn2.append(dataDescription);

  // Creation of table using innerHTML
  // table.innerHTML +=
  //   "<tr>" +
  //   "<td>" + id + ". " + title + "</td>" +
  //   "<td>" + description + "</td>" +
  //   "</td>";
}