// Clipboard stuff.
var copyList: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("copyable") as HTMLCollectionOf<HTMLElement>;

for (var i = 0; i < copyList.length; i++) {
  var element: HTMLElement = copyList.item(i) as HTMLElement;

  element.onclick = function () {
    const textToCopy = element.getAttribute("data-copy-text") || "ERROR COPYING";
    copyToClipboard(textToCopy);
  };
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`Text '${text}' copied to clipboard successfully`);
  } catch (error) {
    console.error('Unable to copy text to clipboard: ', error);
  }
};
