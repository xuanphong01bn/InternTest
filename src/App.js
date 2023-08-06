import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "./function/wayToSort";
import { createRandomArray } from "./function/createRamdomArray";
const WayToSort = [
  "Chọn cách sắp xếp",
  "Bubble Sort",
  "Merge Sort",
  "Selection Sort",
  "Insertion Sort",
  "Quick Sort",
];
function App() {
  const [randomArray, setRandomArray] = useState([]);
  const [sortArray, setSortArray] = useState([]);
  const [showRandom, setShowRandom] = useState(false);
  const [isShowSortArray, setIsShowSortArray] = useState(false);
  const [sortWay, setSortWay] = useState("");

  const handelCreateArray = () => {
    const arrayRandom = createRandomArray();
    localStorage.setItem("myFirstArray", JSON.stringify(arrayRandom));
    // console.log("array :", arrayRandom);
    setRandomArray(arrayRandom);
    setSortArray([]);
    setShowRandom(true);
  };
  const handleChangeSelectSortWay = (e) => {
    console.log(e);
    setSortWay(e);
    setIsShowSortArray(true);
    setShowRandom(false);
    const input = randomArray;
    let sort = [];
    if (e == "Bubble Sort") {
      sort = bubbleSort(input);
    }
    if (e == "Merge Sort") {
      sort = mergeSort(input);
      console.log("true merge");
    }
    if (e == "Selection Sort") {
      sort = selectionSort(input);
    }
    if (e == "Insertion Sort") {
      sort = insertionSort(input);
    }
    if (e == "Quick Sort") {
      sort = quickSort(input);
    }
    setSortArray(sort);
  };
  // console.log("random mang:", randomArray);

  return (
    <div style={{ padding: "24px" }}>
      Intern test
      <div style={{ marginBottom: "16px" }}>
        Đề bài: Tạo một mảng 1000 chuỗi random, sắp xếp nó theo 5 cách
      </div>
      <div className="display-flex-center" style={{ marginBottom: "16px" }}>
        <button onClick={() => handelCreateArray()}>Tạo mảng</button>
        {randomArray.length > 0 && (
          <div style={{ fontStyle: "italic" }}>Mảng random đã được tạo </div>
        )}
      </div>
      {randomArray?.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            Chọn cách sắp xếp mảng
            <select
              onChange={(e) => {
                handleChangeSelectSortWay(e.target.value);
              }}
            >
              {WayToSort.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="display-flex-center">
            <button
              onClick={() => {
                setIsShowSortArray(false);
                setShowRandom(!showRandom);
              }}
            >
              {showRandom ? "Ẩn mảng random" : "Hiện mảng random"}
            </button>
            {sortArray?.length > 0 && (
              <button
                onClick={() => {
                  setShowRandom(false);
                  setIsShowSortArray(!isShowSortArray);
                }}
              >
                {isShowSortArray
                  ? `Ẩn Mảng đã sắp xếp theo ${sortWay}`
                  : `Hiện Mảng đã sắp xếp theo ${sortWay}`}
              </button>
            )}
          </div>

          {showRandom && (
            <div style={{ padding: "8px" }}>
              <div style={{ fontStyle: "italic" }}>Mảng random vừa tạo là:</div>
              {JSON.parse(localStorage.getItem("myFirstArray"))?.map((item) => (
                <div style={{ display: "inline-block", padding: "4px" }}>
                  {item} ;{" "}
                </div>
              ))}
            </div>
          )}

          {sortArray?.length > 0 && isShowSortArray && (
            <div style={{ padding: "8px" }}>
              <div style={{ fontStyle: "italic" }}>
                Đã sắp xếp mảng theo thuật toán {sortWay}
              </div>
              <div style={{ fontStyle: "italic" }}>Mảng sau sắp xếp:</div>
              {sortArray.map((item) => (
                <div style={{ display: "inline-block", padding: "4px" }}>
                  {item} ;{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
