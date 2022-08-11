const city = "Wuppertal";

async function getData() {
  const res = fetch(
    "http://api.aladhan.com/v1/timingsByCity?city=" +city + "&country=Germany&method=3"
  );
  const data = await (await res).json();
  //return data.data.timings.fajr
  document.getElementById("FajrTime").innerHTML = data.data.timings.Fajr;
  document.getElementById("DhuhrTime").innerHTML = data.data.timings.Dhuhr;
  document.getElementById("AsrTime").innerHTML = data.data.timings.Asr;
  document.getElementById("MaghrebTime").innerHTML = data.data.timings.Maghrib;
  document.getElementById("IschaTime").innerHTML = data.data.timings.Isha;
  document.getElementById("date").innerHTML = data.data.date.gregorian.date + " | " + data.data.date.hijri.date;
  document.getElementById("city").innerHTML = city;
}
getData();
