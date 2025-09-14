//　--- 表示ボタンの処理 ---
document.getElementById("displayButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const displayArea = document.getElementById("displayArea");

    if (inputText.trim() === "") {
        alert("入力値が空です。")
    } else {
        displayArea.textContent = inputText;
    }

});

// --- 背景色を変更 ---
const colors = ["lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;

document.getElementById("colorButton").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // 0→1→2→0 と循環
});

// --- ハイライト・テキスト追加・削除機能 ---
let addCount = 0;

document.getElementById("displayButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value.trim();
    if (inputText === "") return; // 空文字は無視

    const tableBody = document.getElementById("dataTable").querySelector("tbody");

    // --- 最大3件制御 ---
    if (tableBody.rows.length >= 3) {
        tableBody.deleteRow(0); // 一番古いデータを削除
    }

    // --- 新しい行を追加 ---
    const newRow = tableBody.insertRow();

    // セル1: 入力テキスト
    const textCell = newRow.insertCell(0);
    textCell.textContent = inputText;

    // セル2: 削除ボタン
    const actionCell = newRow.insertCell(1);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function () {
        newRow.remove();

        // 行数が3未満なら表示ボタンを再表示
        if (tableBody.rows.length < 3) {
            document.getElementById("displayButton").style.display = "inline-block";
        }
    });
    actionCell.appendChild(deleteButton);

    // 入力欄クリア
    document.getElementById("inputText").value = "";

    // --- 累計カウント（減らさない） ---
    addCount++;
    document.getElementById("count").textContent = addCount;

    // --- 行数チェックして表示ボタン制御 ---
    if (tableBody.rows.length >= 3) {
        document.getElementById("displayButton").style.display = "none";
    }

    // --- テーブル全体をハイライト（トグル） ---
    const table = document.getElementById("dataTable");
    table.classList.toggle("highlight");
});

// --- コンソールに1から5まで出力 ---
for (let i = 1; i <= 5; i++) {
    console.log("ループ回数: " + i);
}