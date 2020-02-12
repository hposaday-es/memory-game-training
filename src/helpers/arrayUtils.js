
const arrayShuffler = (array) => {

    const newArray = [...array]

    let currentIndex = newArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  
    return newArray;
  }
  
    
const arrayUtils = {
    arrayShuffler
}


export default arrayUtils