function getRandomString() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // ký sự chữ hoa - chữ thường
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Hàm tạo mảng chứa 1000 phần tử random
export function createRandomArray() {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    let length = Math.floor(Math.random() * 5) + 1; // số phần tử từ 1 ->5
    let element = "";
    for (let j = 0; j < length; j++) {
      element += getRandomString();
    }
    array.push(element);
  }
  return array;
}
