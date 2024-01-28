function convertDateStringToDate(dateString: string): Date | null {
  let delimiter: string;
  if (dateString.includes('-')) {
    delimiter = '-';
  } else if (dateString.includes('/')) {
    delimiter = '/';
  } else {
    console.log('Invalid date string format');
    return null;
  }

  const dateArray: string[] = dateString.split(delimiter);

  if (dateArray.length === 3) {
    const day: number = parseInt(dateArray[0]);
    const month: number = parseInt(dateArray[1]) - 1;
    const year: number = parseInt(dateArray[2]);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const inputDate: Date = new Date(year, month, day);
      const currentDate: Date = new Date();

      if (inputDate <= currentDate) {
        return inputDate;
      } else {
        return null;
      }
    }
  }

  console.log('Invalid date string format');
  return null;
}

export { convertDateStringToDate };
