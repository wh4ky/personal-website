var headerElement: HTMLElement = document.querySelector("header") as HTMLElement;
var footerElement: HTMLElement = document.querySelector("footer") as HTMLElement;

assembleHeader(headerElement);
assembleFooter(footerElement);

function assembleHeader(header: HTMLElement): void {
  const data = [
    { href: '/', text: 'Home' },
    { href: '/contact/', text: 'Contact' },
    { href: '/blog/', text: 'Blog' }
  ];

  const fragment = document.createDocumentFragment();

  data.forEach(link => {
    var newElem: HTMLAnchorElement = document.createElement('a');
    newElem.href = link.href;
    newElem.textContent = link.text;

    fragment.appendChild(newElem);
  });

  header.appendChild(fragment);
  return;
}

function assembleFooter(footer: HTMLElement) {
  const data = [
    { href: 'https://prpl.wtf/', divTitle: `MY FUCKING SIS, LET'S FUCKING GET IT YO`, divText: 'Emma' },
    { href: 'https://jswdev.nl/', divTitle: `MY FUCKING G, MY BOY FOR FUCKING LIFE`, divText: 'JSW' },
    { href: 'https://geen-dolfijn.nl/', divTitle: `THE FUCKING DOLPHIN, MY BOY FOR REAL`, divText: 'Definitely-Not-A-Dolphin' }
  ];

  const fragment = document.createDocumentFragment();

  {
    var titlediv: HTMLDivElement = document.createElement('div');
    titlediv.className = "title";
    titlediv.textContent = "Honorable peeps:";
    fragment.appendChild(titlediv);
  }

  data.forEach(link => {
    var newElem: HTMLAnchorElement = document.createElement('a');
    var elemInner: HTMLDivElement = document.createElement('div');

    newElem.href = link.href;

    elemInner.className = "item";
    elemInner.title = link.divTitle;
    elemInner.textContent = link.divText;

    newElem.appendChild(elemInner);
    fragment.appendChild(newElem)
  });

  footer.appendChild(fragment);
  return;
}

