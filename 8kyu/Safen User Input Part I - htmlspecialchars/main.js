/*

Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
Good luck :D

*/

// solution

function htmlspecialchars(formData) {
  let mapObj = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;",
  };
  formData = formData.replace(/[<>"&]/g, (m) => mapObj[m]);
  return formData;
}
