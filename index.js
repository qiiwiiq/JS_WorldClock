function timeDisplay() {
  // 建立一個時間物件
  let today = new Date();

  // 先取得 UTC 標準時間 timestamp
  let timestampTW = today.getTime();
  let offsetTW = today.getTimezoneOffset() * 60000;
  let timestampUTC = timestampTW + offsetTW;

  // 各地時差 [NY, LON, BKK, TW, SYD]
  let timeZone = [-5, 0, 7, 8, 10];

  // 取得日期時間字串，把字串變陣列
  const getTime = offset => new Date(timestampUTC + offset * 3600000).toString().split(" ");
  let time = timeZone.map(getTime);

  // 日期標籤
  const dateText = time => `${time[2]} ${time[1].toUpperCase()}. ${time[3]}`;
  let localDate = time.map(dateText);

  // 時間標籤
  const timeText = time => `${time[4].substr(0, 5)}`;
  let localTime = time.map(timeText);

  // 把資料渲染到畫面
  let dateDOM = document.querySelectorAll('.date');
  let timeDOM = document.querySelectorAll('.time');

  dateDOM.forEach((i, index) => i.innerHTML = localDate[index]);
  timeDOM.forEach((i, index) => i.innerHTML = localTime[index]); 

}

timeDisplay();
setInterval(timeDisplay, 30000);
