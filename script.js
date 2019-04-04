// for the first table
var callControl,
  read,
  sound,
  truck,
  origin,
  destination,
  pickup,
  dho,
  dhd,
  fp,
  lenghtP,
  weightP,
  trip,
  alarm,
  actions,
  tableRowE;
var tableData = [];

class InputData {
  constructor(tableRow) {
    this.tableRow =
      "<tr>" +
      "<td>" +
      callControl +
      "</td>" +
      "<td>" +
      read +
      "</td>" +
      "<td>" +
      sound +
      "</td>" +
      "<td>" +
      truck +
      "</td>" +
      "<td>" +
      origin +
      "</td>" +
      "<td>" +
      destination +
      "</td>" +
      "<td>" +
      pickup +
      "</td>" +
      "<td>" +
      dho +
      "</td>" +
      "<td>" +
      dhd +
      "</td>" +
      "<td>" +
      fp +
      "</td>" +
      "<td>" +
      lenghtP +
      "</td>" +
      "<td>" +
      weightP +
      "</td>" +
      "<td>" +
      trip +
      "</td>" +
      "<td>" +
      alarm +
      "</td>" +
      "<td>" +
      actions +
      "</td>" +
      "</tr>";
  }
}
// get input value from the form
function getData() {
  callControl = $("#call").val();
  read = $("#read").val();
  sound = $("#sound").val();
  truck = $("#truck").val();
  origin = $("#origin").val();
  destination = $("#destination").val();
  pickup = $("#pickup").val();
  dho = $("#dh-o").val();
  dhd = $("#dh-d").val();
  fp = $("#fp").val();
  lenghtP = $("#length").val();
  weightP = $("#wight").val();
  trip = $("#trip").val();
  alarm = $("#alarm").val();
  actions = $("#actions").val();
  tableRowE = new InputData(callControl, read);
  tableData.push(tableRowE);
  alert("Data saved");
  // delete all data from the form
  $("input").val("");
  return tableData;
}
// function to display a table row
function displayTable() {
  var elements = tableData.length;
  document.getElementById("table1").innerHTML +=
    tableData[elements - 1].tableRow;
}
// to execute functions on click
$("#form").on("submit", ev => {
  ev.preventDefault();
  getData();
  displayTable();
});

// delete all table rows
$("#btn-del").on("click", ev => {
  $("#table1 tbody").remove();
});

//display pop-up on click and hide by clicking on submit button
$(".popUp").hide();
$("#btn-add").on("click", ev => {
  $(".popUp").toggle();
});
$("button").on("click", ev => {
  $(".popUp").hide();
});

// for the second table 
var arrRate,
  arrF,
  arrSource,
  arrAge,
  arrAvail,
  arrTruck,
  arrTruckO,
  arrDhO,
  arrFP,
  arrOrigin,
  arrTrip,
  arrDestination,
  arrTruckD,
  arrLength,
  arrWeight,
  arrCompany,
  arrPhone;

var isSecondTableDisplayed = false;

//arrRate = Math.floor(Math.random() * 10000); // to get 4 digits number
arrF = ["yes", "no"];
// var elArrF = Math.floor(Math.random()*2);//to have whether 0 or 1;
arrSource = ["DAT", "SAT"];
arrAge = ["00:01", "00:02", "00:03", "00:04", "00:05"];
arrAvail = ["11/24", "11/25", "11/23", "10/21", "11/34"];
arrTruck = ["V", "VR", "R", "T", "TR"];
arrTruckO = "Belwood";
// arrDhO = Math.floor(Math.random() * 1000); // to get 3 digits number
arrFP = ["F", "P"];
arrOrigin = ["Erie", "St Clair", "Tucson", "Cleveland", "Detroit", "Memphis"];
arrTrip = Math.floor(Math.random() * 1000); // to get 3 digits number
arrDestination = ["Portland", "Baltimore", "Memphis", "Atlanta", "Omaha"];
arrDhD = "";
arrTruckD = "";
arrLength = Math.floor(Math.random() * 100) + " ft";
arrWeight = Math.floor(Math.random() * 50) + " klbs";
arrCompany = ["Coyote Logistics", "R & R Express", "Mist"];
arrPhone =
  "(" +
  Math.floor(Math.random() * 1000) +
  ")" +
  Math.floor(Math.random() * 100000000);

function createTableRow() {
  document.getElementById("table2").innerHTML +=
    "<tr>" +
    "<td>" +
    Math.floor(Math.random() * 10000) /*Rate - random 4 digits number */ +
    "</td>" +
    "<td>" +
    arrF[Math.floor(Math.random() * 2)] +
    "</td>" +
    "<td>" +
    arrSource[Math.floor(Math.random() * 2)] +
    "</td>" +
    "<td>" +
    arrAge[Math.floor(Math.random() * 5)] +
    "</td>" +
    "<td>" +
    arrAvail[Math.floor(Math.random() * 5)] +
    "</td>" +
    "<td>" +
    arrTruck[Math.floor(Math.random() * 5)] +
    "</td>" +
    "<td>" +
    arrTruckO +
    "</td>" +
    "<td>" +
    Math.floor(Math.random() * 1000) /* DH-O column*/ +
    "</td>" +
    "<td>" +
    arrFP[Math.floor(Math.random() * 2)] +
    "</td>" +
    "<td>" +
    arrOrigin[Math.floor(Math.random() * 6)] +
    "</td>" +
    "<td>" +
    Math.floor(Math.random() * 1000) /* Trip column*/ +
    "</td>" +
    "<td>" +
    arrDestination[Math.floor(Math.random() * 5)] +
    "</td>" +
    "<td>" +
    arrDhD +
    "</td>" +
    "<td>" +
    arrTruckD +
    "</td>" +
    "<td>" +
    (Math.floor(Math.random() * 100) + 1) /* Length column*/ +
    " ft" +
    "</td>" +
    "<td>" +
    (Math.floor(Math.random() * 50) + 1) /* Weight column*/ +
    " klbs" +
    "</td>" +
    "<td>" +
    arrCompany[Math.floor(Math.random() * 3)] +
    "</td>" +
    "<td>" +
    "(" +
    Math.floor(Math.random() * 1000) +
    ")" +
    Math.floor(Math.random() * 100000000) /* Number column*/ +
    "</td>" +
    "</tr>";
}
// for pay button
$("#btn-play").on("click", ev => {
  isSecondTableDisplayed = true;
     displaySecondTable();
});

function displaySecondTable() {
  if(isSecondTableDisplayed){
  var numberOfRows = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  console.log(numberOfRows);
  $("#numberOfRows").text(numberOfRows);
  // remove previous tables rows
  $("#table2 tbody").remove();
  // display new tables rows
  for (var i = 1; i <= numberOfRows; i++) {
    createTableRow();
  }
  // change the table every 10 sec
  setInterval(displaySecondTable, 10000);
}
}

// delete data from the second table
$('#btn-clear').on('click', ev => {
    $("#table2 tbody").remove();
    isSecondTableDisplayed = false;
});