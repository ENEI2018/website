function copyToClipboard(id) {
    var copyText = $('#' + id);

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = copyText.text();  
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    console.log('Url copied to clipboard: ');
    console.log(copyText.text());
}