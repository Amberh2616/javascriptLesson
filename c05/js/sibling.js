two_element = document.getElementById('two'); // 取得 ID 為 "two" 的元素
var previous_element = two_element.previousElementSibling; // 取得前一個同級別的元素
var next_element = two_element.nextElementSibling; // 取得後一個同級別的元素
previous_element.className = 'complete'; // 設定前一個元素的 CSS class 為 "complete"
next_element.className = 'cool'; // 設定後一個元素的 CSS class 為 "cool"

//這段程式碼的執行結果會是，前一個元素的 CSS class 變成 "complete"，後一個元素的 CSS class 變成 "cool"。
//通過修改 CSS class，可以改變元素的樣式，例如顏色、字體、大小等