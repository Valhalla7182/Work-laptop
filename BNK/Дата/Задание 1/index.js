function getDateFormat(date, separator = ".") {
    const data = new Date(date);
    
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const day = String(data.getDate()).padStart(2, '0');

    return `${day}${separator}${month}${separator}${year}`;
}

console.log(getDateFormat("February 3 2022", '/'));