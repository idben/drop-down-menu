# 自製下拉式選單
## page1
1. 依照同學原先的需求 Bootstrap 的 DropDown，在手機尺寸要能維時下拉式選單模樣，在手機以上尺寸是展開模樣。單一 Bootstrap 的 DropDown 是無法做到的。
2. 這一頁就展示是了如何在使用 Bootstrap 的 DropDown 去切換 API 的網址
3. API 是寫在 pages 的 api 下
4. Bootstrap 的 DropDown 寫在 Left 組件中
5. 把原本 Bootstrap 的 DropDown 的 <li> 下的超連結換成一般 <div>，再加上 Click 事件去觸發
6. DropDown 的內容寫在外面的變數 optionAry 中控制
## page2
1. 因為 page1 與 Left 組件的不足，所以有了 page2 與 Left2
2. Lefe2 改使用 HTML 的 <select> <option> 組合
3. select 可以使用其屬性 size 來改變顯示個數
4. 在 Left2 中的 useEffect 註冊 resize 事件，切換 size
5. 手機版本的 select 就沒寫樣式，因為會使用手機的 select UI
6. 桌機版本的就寫了 <option> 變大字與與下面的 <option> 推開距離
7. 並寫了 <option> 的偽元素 :checked，來設定被選擇時的樣式
8. <option> 的 :checked 在點擊後再跳開焦點才會有作用，因此在下拉式選單的 onChange 事件才會有個 blur
## page3
1. 寫完了 Left2，覺得應該可以把原本 Bootstrap Dropdown 的使用法再補完，所以寫了 page3 和 Left3
2. 這一頁中是手機版本是一般的 <select>，手機以上版本則是自己用一般的 <div> 包 <div>
3. 兩個版本的切換是寫在 CSS 中的一般 RWD 寫法
4. 手機以上版本只是在 <div> 上寫 click 事件，將記錄用的變數改變，再依照記錄用變數改變樣式
## index
1. 從 page3 最後就可以再改寫，變成 index 與 Left4
2. Left4 的手機版本多一個按鈕，一開始寫著請選擇，點了之後把 idbenMenu 顯示
3. 而 idbenMenu 則是本來在 Left3 的階段的 RWD 就有寫在手機版本隱藏，現在只是多寫了當點擊請選擇按鈕時多加一組 class 來顯示