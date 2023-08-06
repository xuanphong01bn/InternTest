function getRandomChar() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Hàm tạo mảng chứa 1000 phần tử random
export function createRandomArray() {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    let randomLength = Math.floor(Math.random() * 5) + 1;
    let element = "";
    for (let j = 0; j < randomLength; j++) {
      element += getRandomChar();
    }
    array.push(element);
  }
  return array;
}
