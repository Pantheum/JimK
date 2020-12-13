function myFunction() {
    addr = "xpub6BgDJTqLBYyrPkj2fd8BJdLNAy49RV4e28dMYeziwhr7ZPcZStXyDnzQrWB8Zupk8oe23SDif4qcXDs3uy37LfeXXNzRoDZAmnw8ZXqWen7";
    
    var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = addr;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);
    
    
  window.alert("Thank you for your support, it is much appreciated! My Bitcoin address has been copied to your clipboard!");
}