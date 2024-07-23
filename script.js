const btn = document.getElementById("check-btn");
const txt = document.getElementById("text-input");
const result = document.getElementById("result");
function palindrome(str){
  var re = /[\W_]/g;
  var lowStr = str.toLowerCase().replace(re,"");
  var reverseStr = lowStr.split("").reverse().join("");
  return lowStr===reverseStr;
}
btn.addEventListener("click", () => {
  const inputText = txt.value;
  if(inputText!=="")
  {
    result.classList.remove("hide");
    if (palindrome(inputText)) {
    result.innerHTML = `<span id="result">${inputText}</span><p id="result"> is a palindrome.</p>`;
    result.textContent = `${inputText} is a palindrome`
  }
   else {
      result.innerHTML = `<span id="result">${inputText}</span><p id="result"> is not a palindrome</p>`;
      result.textContent = `${inputText} is not a palindrome`
    }}
  else{
      alert("Please input a value")
    }
  });