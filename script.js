function applySpeech() {
    const speechInput = document.getElementById('speechInput');
    const speechText = document.getElementById('speechText');

    speechText.textContent = speechInput.value; // 入力されたテキストを吹き出し位置に設定
}

