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

arrF = ["yes", "no"];
arrSource = ["DAT", "SAT"];
arrAge = ["00:01", "00:02", "00:03", "00:04", "00:05"];
arrAvail = ["11/24", "11/25", "11/23", "10/21", "11/34"];
arrTruck = ["V", "VR", "R", "T", "TR"];
arrTruckO = "Belwood";
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

var vm = new Vue({
  el: "#app",
  data: {
    // pop-up is hidden
    isDisplayed: false, 
    // submit form
    isSubmited: false,
    // the second table is not displayed yet
    isSecondTableDisplayed: false, 
    inputData: [
      {
        callControl: "",
        read: "",
        sound: "",
        truck: "",
        origin: "",
        destination: "",
        pickup: "",
        dhO: "",
        dhD: "",
        fp: "",
        myLength: "", //as lenghth is reserved word
        weigth: "",
        trip: "",
        alarm: "",
        actions: ""
      }
    ],
    tableData: []
  },
  methods: {
    displayed: function() {
      this.isDisplayed = true;
    },
    submitForm: function() {
      this.isDisplayed = false;
      // somehow to display table cells from input
      this.isSubmited = true;
      this.displayFirstTable();
    },
    displaySecondTable: function() {
      this.isSecondTableDisplayed = true;
      this.createSecondTable();
    },
    createSecondTable: function(){
      if(this.isSecondTableDisplayed){
        console.log('isSecondTableDisplayed ' + this.isSecondTableDisplayed );
        var numberOfRows = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        $("#numberOfRows").text(numberOfRows);
        // remove previous tables rows
        $("#table2 tbody tr").remove();
        // display new tables rows
        for (var i = 1; i <= numberOfRows; i++) {
          this.createSecondTableRow();
        }
        setInterval(this.createSecondTable, 10000);
      }
    },
    clearSecondTable: function() {
      $('#table2 tbody tr').remove();
      this.isSecondTableDisplayed = false;
      console.log('table cleaned');
     return this.isSecondTableDisplayed;
    },
    clearFirstTable: function(){
      this.isSubmited = false
    },
    createSecondTableRow: function() {
      document.getElementById("tablePart").innerHTML +=
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
    },
    createFirstTableRow: function(){
      var tableRow =
      "<tr>" +
      "<td>" +
      $("#call").val() +
      "</td>" +
      "<td>" +
      $("#read").val() +
      "</td>" +
      "<td>" +
      $("#sound").val() +
      "</td>" +
      "<td>" +
      $("#truck").val() +
      "</td>" +
      "<td>" +
      $("#origin").val()+
      "</td>" +
      "<td>" +
      $("#destination").val() +
      "</td>" +
      "<td>" +
      $("#pickup").val() +
      "</td>" +
      "<td>" +
      $("#dh-o").val() +
      "</td>" +
      "<td>" +
      $("#dh-d").val() +
      "</td>" +
      "<td>" +
      $("#fp").val() +
      "</td>" +
      "<td>" +
      $("#length").val() +
      "</td>" +
      "<td>" +
      $("#wight").val() +
      "</td>" +
      "<td>" +
      $("#trip").val() +
      "</td>" +
      "<td>" +
      $("#alarm").val() +
      "</td>" +
      "<td>" +
      $("#actions").val() +
      "</td>" +
      "</tr>";
      this.tableData.push(tableRow);
      console.log(this.tableData);
      return this.tableData;
    },
    displayFirstTable: function(){
      this. createFirstTableRow();
      var elements = this.tableData.length;
      document.getElementById("table1").innerHTML +=
      this.tableData[elements - 1];
    },
    canselButton: function(){
      this.isDisplayed = false;
    }
  }
});
