class Counter {
  countDownFromTen() {
    console.log("Nå kommer ti tall.");
    console.log("De kommer veldig snart, bare vent.");
    console.log("Straks nå!");
    console.log("Nei, en av dem måtte på do.");
    console.log("Det tok sin tid, ja.");
    console.log("Der er han tilbake igjen.");

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse().forEach((i) => console.log(i));
  }
}

const counter = new Counter();
counter.countDownFromTen();
