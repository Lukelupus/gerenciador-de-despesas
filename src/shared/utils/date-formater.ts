function convertDateStringToDate(dateString: string): Date | null {
  const dateArray: string[] = dateString.split('-');

  if (dateArray.length === 3) {
    const day: number = parseInt(dateArray[0]);
    const month: number = parseInt(dateArray[1]) - 1; // Adjust for zero-based indexing
    const year: number = parseInt(dateArray[2]);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const inputDate: Date = new Date(year, month, day);
      const currentDate: Date = new Date();

      // Compare with the current date to ensure it's not a future date
      if (inputDate <= currentDate) {
        return inputDate;
      } else {
        throw new Error('Date is a future date!');
      }
    }
  }

  return null;
}

export { convertDateStringToDate };
