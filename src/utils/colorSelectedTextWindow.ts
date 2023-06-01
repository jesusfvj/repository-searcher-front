const highlightString = (searchString: string): void => {
  const searchRegex = new RegExp(searchString, "gi");
  const elements = document.getElementsByTagName("*");

  for (const element of elements) {
    if (element.nodeType === Node.TEXT_NODE) {
      const text = element.nodeValue || "";
      const matches = text.match(searchRegex);

      if (matches) {
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        const highlightedText = document.createTextNode(matches[0]);
        span.appendChild(highlightedText);
        element.parentNode?.replaceChild(span, element);
      }
    }
  }
};

export { highlightString };