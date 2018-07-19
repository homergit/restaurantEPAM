const advancedTime = {
  today: {
    '14:00': ['table_1', 'table_3', 'table_4'],
    '14:15': ['table_1', 'table_3', 'table_4'],
    '14:30': ['table_1', 'table_3', 'table_4'],
    '14:45': ['table_1', 'table_4'],
    '15:00': ['table_2', 'table_4'],
    '15:15': ['table_2', 'table_4'],
    '15:30': ['table_2', 'table_4'],
    '15:45': ['table_2', 'table_4'],
    '16:00': ['table_2', 'table_4'],
    '16:15': ['table_3', 'table_4'],
    '16:30': ['table_3', 'table_4'],
    '16:45': ['table_1', 'table_6', 'table_4'],
    '17:00': ['table_1', 'table_6', 'table_4'],
    '17:15': ['table_1', 'table_6', 'table_4'],
    '17:30': ['table_1', 'table_6', 'table_4'],
    '17:45': ['table_1', 'table_4'],
    '18:00': ['table_1', 'table_4'],
    '18:15': ['table_1', 'table_4'],
    '18:30': ['table_3', 'table_4'],
    '18:45': ['table_3', 'table_4'],
    '19:00': ['table_3', 'table_4'],
    '19:15': ['table_3', 'table_4'],
    '19:30': ['table_1', 'table_3', 'table_4'],
    '19:45': ['table_1', 'table_3', 'table_4'],
    '20:00': ['table_1', 'table_3', 'table_4'],
    '20:15': ['table_1', 'table_3', 'table_4'],
    '20:30': ['table_1', 'table_6'],
    '20:45': ['table_1', 'table_6'],
    '21:00': ['table_1', 'table_6']
  },
  tomorrow: {
    '14:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '14:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '14:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '14:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '15:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '15:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '15:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '15:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '16:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '16:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '16:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '16:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '17:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '17:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '17:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '17:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '18:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '18:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '18:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '18:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '19:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '19:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '19:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '19:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '20:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '20:15': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '20:30': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '20:45': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6'],
    '21:00': ['table_1', 'table_2', 'table_3', 'table_4', 'table_5', 'table_6']
  }
};


function tableBooking() {
  const TABLE_NUMS = 6;
  const OPEN_TIME = '14:00';
  const CLOSE_TIME = '21:00';
  const TIME_MINUTES_DIFF = 15;
  const CLOSE_TABLES_AFTER_TIME = 8;
  const CLOSE_TABLES_BEFORE_TIME = 2;
  const tablesObj = getLocalStorageData('bookingDate') || setAndGetLocalStorage(advancedTime);
  let currentTime;
  let currentDate;

  function setLocalStorageData(data) {
    const bookingDateObj = JSON.stringify(data);
    localStorage.setItem('bookingDate', bookingDateObj);
  }

  function getLocalStorageData(value) {
    return JSON.parse(localStorage.getItem(value));
  }

  function setAndGetLocalStorage(objToSet) {
    setLocalStorageData(objToSet);
    return getLocalStorageData('bookingDate');
  }

  function renderTables(tableToDisp) {
    for (let i = 1; i <= TABLE_NUMS; i += 1) {
      document.getElementById(`table_${i}`).disabled = true;
    }
    for (let i = 0; i < tableToDisp.length; i += 1) {
      document.getElementById(tableToDisp[i]).disabled = false;
    }
  }

  function displayTableOnInput(event) {
    const timeSelect = event.currentTarget.querySelector('#selectedTime');
    const dateSelect = event.currentTarget.querySelector('#selectedDate');
    if (timeSelect.selectedIndex !== 0 &&
            dateSelect.selectedIndex !== 0) {
      currentDate = dateSelect[dateSelect.selectedIndex].textContent;
      currentTime = timeSelect[timeSelect.selectedIndex].textContent;
      if (tablesObj && tablesObj[currentDate]) {
        const availableArray = tablesObj[currentDate][currentTime];
        renderTables(availableArray);
      }
    }
  }

  function bookTimeBeforeAfter(tableData, checkedTableId, beforeNum, afterNum) {
    let curTime = new Date(0, 0, 1, +currentTime.slice(0, 2), +currentTime.slice(3));
    while (curTime >= new Date(
      0, 0, 1, +OPEN_TIME.slice(0, 2),
      +OPEN_TIME.slice(3)
    ) && beforeNum + 1) {
      const timeKey = curTime.getMinutes() >= 10 ?
        `${curTime.getHours()}:${curTime.getMinutes()}` :
        `${curTime.getHours()}:0${curTime.getMinutes()}`;
      const existsTable = tableData[currentDate][timeKey].indexOf(checkedTableId);
      if (existsTable !== -1) tableData[currentDate][timeKey].splice(existsTable, 1);
      curTime.setMinutes(curTime.getMinutes() - TIME_MINUTES_DIFF);
      beforeNum -= 1;
    }
    curTime = new Date(
      0, 0, 1, currentTime.slice(0, 2),
      currentTime.slice(3)
    );
    curTime.setMinutes(curTime.getMinutes() + TIME_MINUTES_DIFF);
    while (curTime <= new Date(
      0, 0, 1,
      +CLOSE_TIME.slice(0, 2), +CLOSE_TIME.slice(3)
    ) && afterNum) {
      const timeKey = curTime.getMinutes() >= 10 ?
        `${curTime.getHours()}:${curTime.getMinutes()}` :
        `${curTime.getHours()}:0${curTime.getMinutes()}`;
      const existsTable = tableData[currentDate][timeKey].indexOf(checkedTableId);
      if (existsTable !== -1) tableData[currentDate][timeKey].splice(existsTable, 1);
      curTime.setMinutes(curTime.getMinutes() + TIME_MINUTES_DIFF);
      afterNum -= 1;
    }
  }

  function successBookingModal() {
    document.getElementById('successBooking').style.display = 'block';
    setTimeout(() => document.getElementById('successBooking').style.display = '', 3000);
  }

  function reserveTable() {
    const checkedTable = document.querySelector("input[name='table']:checked");
    bookTimeBeforeAfter(
      tablesObj, checkedTable.id,
      CLOSE_TABLES_BEFORE_TIME, CLOSE_TABLES_AFTER_TIME
    );
    setLocalStorageData(tablesObj);
    // successBookingModal();
  }

  return {
    displayTableOnInput,
    reserveTable
  };
}

const handlers = tableBooking();

document.getElementById('bookingForm').addEventListener('change', handlers.displayTableOnInput);
document.getElementById('bookingSubmit').addEventListener('click', handlers.reserveTable);
