var tableEditorModule = (function() {
  var table           = document.getElementById("tableBody");
  var pagination      = document.getElementById("pagination");
  var addRowBtn       = document.getElementById("addRow");
  var addRowForm      = document.getElementById("addRowForm");
  var clearTableBtn   = document.getElementById("clearTable");
  var exportTableBtn  = document.getElementById("exportData");
  var exportTableForm = document.getElementById("exportTableForm");
  var demoDataBtn     = document.getElementById("demoData");
  var delRowsBtn      = document.getElementById("delRow");
  var importDataArea  = document.getElementById("textArea");
  var sortIdBtn       = document.getElementById("sortId");
  var sortNameBtn     = document.getElementById("sortName");
  var sortQtyBtn      = document.getElementById("sortQty");
  var sortAvailBtn    = document.getElementById("sortAvail");
  var filterNameInp   = document.getElementById("filterName");
  var paginationLen   = 10;

  var tableData         = [];
  var selectedTable     = [];

  function drawTable(arr, num = 0) {
    arr = arr || tableData.slice(num, 10);

    var newTableBody = arr.map(function(row) {
      return `
        <tr>
          <th scope="row">${row.id}</th>
          <td>${row.name}</td>
          <td>${row.qty}</td>
          <td>${row.avail}</td>
          <td><input type="checkbox"></td>
        </tr>`}).join("");

    table.innerHTML = newTableBody;
    addPagination(tableData);
  };

  function addPagination(arr) {
    var paginationList = "";
    var pageNum = Math.ceil(arr.length / paginationLen);
    for (var i = 0; i < pageNum; i++) {
      paginationList += `
        <li><a href="#${i+1}">${i+1}</a></li>
        `;
      }
      pagination.innerHTML = paginationList;
    };

    pagination.addEventListener("click", function(e) {
      if (e.target.tagName === "A") {
        e.preventDefault();
        var start = +e.target.href.split("#")[1] * 10 - 10;
        var end   = +start + 10;
        selectedTable = tableData.slice(start, end);
        drawTable(selectedTable);
      }
    });

  function addNewRow() {
    addRowBtn.addEventListener("click", function() {
      addRowForm.classList.toggle("hidden");
    });

    addRowForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var availability = (addRowForm.pAvailability.checked) ? "Yes" : "No";
      var newDataSet = {
        "id"    : tableData.length + 1,
        "name"  : addRowForm.pName.value,
        "qty"   : addRowForm.pQty.value,
        "avail" : availability
      };

      tableData.push(newDataSet);
      addRowForm.querySelectorAll("input, select").forEach( (input) => input.value = "" );
      drawTable();
    });
  };

  function clearTable() {
    clearTableBtn.addEventListener("click", function() {
      tableData = [];
      drawTable();
    });
  };
  function recountIds() {
    tableData.map(function(item, i) {
      item.id = i + 1;
    });
  };

  function delRows() {
    delRowsBtn.addEventListener("click", function(e) {
      e.preventDefault();
      var tableRows = table.querySelectorAll("tr");
      var devareRawsId = [];
      tableRows.forEach(function (tabelRow, i) {
        if (tabelRow.querySelector("input[type=checkbox]:checked")) {
          devareRawsId.push(i + 1);
        }
      });
      for (var len = devareRawsId.length-1, i = len; i >= 0; i--) {
        var index = devareRawsId[i] -1 ;
        tableData.splice(index, 1);
      }
      recountIds();
      drawTable();
    });
  };

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function addRandomContent() {

    for (var i = 0; i < 10; i++) {
      var randomAvail   = (getRandom(0, 1)) ? "yes" : "no";
      var randomQty     = getRandom(0, 5);
      var randomName    = "John Wick";
      var newDataSet = {
        "id"    : tableData.length + 1,
        "name"  : randomName,
        "qty"   : randomQty,
        "avail" : randomAvail
      };
      tableData.push(newDataSet);
    };
    drawTable();
  };

  function addDemoData() {
    demoDataBtn.addEventListener("click", function(e) {
      e.preventDefault();
      addRandomContent();
    });
  };

  function exportTableData() {
    exportTableBtn.addEventListener("click", function(e) {
      e.preventDefault();
      exportTableForm.classList.toggle("hidden");
    });
  };

  var currentSortedColumn = "";

  function sortColumn(column, button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      if(currentSortedColumn === column) {
        tableData.reverse();
      } else {
        tableData.sort((a,b) => a[column] > b[column] ? -1 : 1 );
        currentSortedColumn = column;
      }
    drawTable();
    });
  };

  function filterName() {
    filterNameInp.addEventListener("keyup", function() {
      var searchInp = this.value;
      var filteredArr = tableData.filter(data => data.name.toLowerCase().includes(searchInp));
      drawTable(filteredArr);
    });
    filterNameInp.addEventListener("focusout", function() {
      this.value = "";
      drawTable(selectedTable);
    });
  };

  function init() {
    addRandomContent();
    addNewRow();
    exportTableData();
    clearTable();
    delRows();
    addDemoData();
    sortColumn("id", sortIdBtn);
    sortColumn("name", sortNameBtn);
    sortColumn("qty", sortQtyBtn);
    sortColumn("avail", sortAvailBtn);
    filterName();
  };
  return {
    init: init
    }
}());


tableEditorModule.init();