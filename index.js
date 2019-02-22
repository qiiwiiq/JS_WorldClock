function timeDisplay() {
  // 建立一個時間物件
  let today = new Date();

  // 先取得 UTC 標準時間 timestamp
  let timestampTW = today.getTime();
  let offsetTW = today.getTimezoneOffset() * 60000;
  let timestampUTC = timestampTW + offsetTW;

  // 各地時差
  let timeZone = {
    NY: -5,
    LON: 0,
    BKK: 7,
    TW: 8,
    SYD: 10
  };

  // 取得日期時間字串，把字串變陣列
  const getTime = offset =>
    new Date(timestampUTC + offset * 3600000).toString().split(" ");

  let timeNY = getTime(timeZone.NY);
  let timeLON = getTime(timeZone.LON);
  let timeBKK = getTime(timeZone.BKK);
  let timeTW = getTime(timeZone.TW);
  let timeSYD = getTime(timeZone.SYD);

  // 日期標籤
  const dateText = time => `${time[2]} ${time[1].toUpperCase()}. ${time[3]}`;

  // 時間標籤
  const timeText = time => `${time[4].substr(0, 5)}`;

  // 把資料渲染到畫面
  document.getElementById("NYdate").innerHTML = dateText(timeNY);
  document.getElementById("LONdate").innerHTML = dateText(timeLON);
  document.getElementById("BKKdate").innerHTML = dateText(timeBKK);
  document.getElementById("TWdate").innerHTML = dateText(timeTW);
  document.getElementById("SYDdate").innerHTML = dateText(timeSYD);

  document.getElementById("NYtime").innerHTML = timeText(timeNY);
  document.getElementById("LONtime").innerHTML = timeText(timeLON);
  document.getElementById("BKKtime").innerHTML = timeText(timeBKK);
  document.getElementById("TWtime").innerHTML = timeText(timeTW);
  document.getElementById("SYDtime").innerHTML = timeText(timeSYD);
}

timeDisplay();
setInterval(timeDisplay, 30000);
