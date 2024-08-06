document.getElementById('nextButton1').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
});

document.getElementById('nextButton2').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'flex';
});

document.getElementById('prevButton1').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'flex';
});

document.getElementById('prevButton2').addEventListener('click', function() {
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
});

document.getElementById('submitButton2').addEventListener('click', function() {
    var input = document.getElementById('userInput2').value.toLowerCase();
    var response = '';

    switch (input) {
        case '楊允488':
            response = '我先沒有哈';
            break;
        case '林奇恩561':
            response = '你先沒有ㄛ';
            break;
        case '曹幼楠005':
            response = '蔡悅祈';
            break;
        case '林昱恩363':
            response = '李竹恩';
            break;
        case '葉韋霆432':
            response = '呂潔心';
            break;
        case '時瑋智532':
            response = '張承祐';
            break;
        case '蔡悅祈541':
            response = '林昱恩';
            break;
        case '何雨諠857':
            response = '徐晨硯';
            break;
        case '林亞設209':
            response = '陳冠廷';
            break;
        case '陳恩祐841':
            response = '李以云';
            break;
        case '呂潔心195':
            response = '彭于真';
            break;
        case '陳冠廷311':
            response = '時瑋智';
            break;
        case '李以云339':
            response = '何雨諠';
            break;
        case '徐晨硯273':
            response = '邱恩祈';
            break;
        case '彭于真289':
            response = '曹幼楠';
            break;
        case '邱恩祈060':
            response = '葉韋霆';
            break;
        case '張承祐607':
            response = '林亞設';
            break;
        case '李竹恩449':
            response = '陳恩祐';
            break;
        case '孫承煥790':
            response = '你先沒有ㄛ';
            break;
        case '張懿082':
            response = '你先沒有ㄛ';
            break;
        case '江玉芳':
            response = '你先沒有ㄛ';
            break;
        case '':
            response = '沒有東西哦';
            break;
        default:
            response = '啊？有可能是我打錯字，如果沒跑出來請找楊允';
    }

    document.getElementById('response2').textContent = response;
});
