// Function to calculate the average of even numbers in an array
function averageOfEvenNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    const sum = evenNumbers.reduce((compt, curr) => compt + curr, 0);
    return sum / evenNumbers.length;
  }
  
  // Function to find the longest word in an array of words
  function longestWord(arr) {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  }
  
  // Function to calculate the average number of pages across all books
  function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, curr) => acc + curr, 0);
    return totalPages / books.length;
  }
  
  // Function to count the frequency of each string in an array
  function stringFrequency(arr) {
    return arr.reduce((freqMap, str) => {
      freqMap[str] = (freqMap[str] || 0) + 1;
      return freqMap;
    }, {});
  }
  
  // Function to count the number of people by city
  function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
      cityCount[person.city] = (cityCount[person.city] || 0) + 1;
      return cityCount;
    }, {});
  }
  