// Javascript here
var fetchData = new XMLHttpRequest();
var fetchedData;
fetchData.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    fetchedData = JSON.parse(this.responseText);
    for (i = 0; i < 6; i++) {
      document.getElementById('data').innerHTML +=
        "<tr>" +
        "<td>" + fetchedData[i].id + ". " + fetchedData[i].title + "</td>" +
        "<td>" + fetchedData[i].body + "</td>" +
        "</td>";
    }
    console.log(fetchedData);
  }
}
fetchData.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
fetchData.send();

function getData() {
  var i = 0;
  var count = 6;
  var displayedAll = false;
  var length = fetchedData.length;
  do {
    for (i = count; i < count + 6; i++) {
      document.getElementById('data').innerHTML +=
        "<tr>" +
        "<td>" + fetchedData[i].id + ". " + fetchedData[i].title + "</td>" +
        "<td>" + fetchedData[i].body + "</td>" +
        "</td>";
    }
    console.log(count, length);
    count = count + 6;
  } while (count >= length);
  displayedAll = true;
  if (displayedAll) {
    document.getElementsByTagName('button')[0].style.display = "none";
  }
}