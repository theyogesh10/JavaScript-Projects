function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "<style>";
    outPut.contentWindow.eval(jsCode);

}