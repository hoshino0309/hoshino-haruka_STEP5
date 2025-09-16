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

document.getElementById("displayButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value.trim();
    if (!inputText) return;

    const tableBody = document.getElementById("dataTable").querySelector("tbody");

    // 最大3件制御（古い行削除＋カウント減少＋ボタン復活判定）
    while (tableBody.rows.length >= 3) {
        tableBody.deleteRow(0);
        addCount = Math.max(addCount - 1, 0);

        if (addCount < 3) {
            document.getElementById("displayButton").style.display = "inline-block";
        }
    }

    // 新しい行追加
    const newRow = tableBody.insertRow();
    const textCell = newRow.insertCell(0);
    textCell.textContent = inputText;

    const actionCell = newRow.insertCell(1);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function() {
        newRow.remove();

        // カウント減少
        addCount = Math.max(addCount - 1, 0);
        document.getElementById("count").textContent = addCount;

        // 3回未満なら表示ボタン復活
        if (addCount < 3) {
            document.getElementById("displayButton").style.display = "inline-block";
        }
    });
    actionCell.appendChild(deleteButton);

    // 入力欄クリア
    document.getElementById("inputText").value = "";

    // カウントアップ（追加分）
    addCount++;
    document.getElementById("count").textContent = addCount;

    // 3回以上で表示ボタン非表示
    if (addCount >= 3) {
        document.getElementById("displayButton").style.display = "none";
    }

    // テーブル全体ハイライト（トグル）
    document.getElementById("dataTable").classList.toggle("highlight");
});