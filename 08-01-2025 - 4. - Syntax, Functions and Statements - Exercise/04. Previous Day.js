function previousDay(year, month, day) {

    let currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);

    let prevYear = currentDate.getFullYear();
    let prevMonth = currentDate.getMonth() + 1;
    let prevDay = currentDate.getDate();
    
    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
  }
  
  previousDay (2016, 9, 30);         //2016-9-29
  previousDay (2015, 5, 10);         //2015-5-9

  // Previous Day

// Write a JS function that calculates the date of the previous day by a given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

// Input           Output
// 2016, 9, 30     2016-9-29
// 2015, 5, 10     2015-5-9

// Hints
// · Use Date()