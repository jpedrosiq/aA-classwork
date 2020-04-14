
const partyHeader = document.getElementById("party");

export const htmlGenerator = (string, htmlElement) => {
  let arr = Array.from(htmlElement.children)
  arr.forEach(el => {
    htmlElement.removeChild(el);
  })
  var element = document.createElement("p");
  element.innerHTML = string;
  htmlElement.append(element)
};

htmlGenerator('Party Time.', partyHeader);

htmlGenerator('I <3 Vanilla DOM manipulation', partyHeader)
