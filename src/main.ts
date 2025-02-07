document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header") as HTMLElement;
  const footerElement = document.querySelector("footer") as HTMLElement;

  assembleHeader(headerElement);
  assembleFooter(footerElement);
});


// DOM(MY) MANIPULATION FUNCTIONS //

async function assembleHeader(header: HTMLElement) {
  const headerData = [
    { href: '/', text: 'Home' },
    { href: '/contact/', text: 'Contact' },
  ] as { href: string, text: string }[];

  const fragment = document.createDocumentFragment();

  for (const group of headerData) {
    var newElem: HTMLAnchorElement = document.createElement('a');
    newElem.href = group.href;
    newElem.textContent = group.text;

    fragment.appendChild(newElem);
  }

  header.appendChild(fragment);
  return;
}

async function assembleFooter(footer: HTMLElement) {
  const footerData = [
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

  for (const group of footerData) {
    var newElem: HTMLAnchorElement = document.createElement('a');
    var elemInner: HTMLDivElement = document.createElement('div');

    newElem.href = group.href;

    elemInner.className = "item";
    elemInner.title = group.divTitle;
    elemInner.textContent = group.divText;

    newElem.appendChild(elemInner);
    fragment.appendChild(newElem)
  }

  footer.appendChild(fragment);
  return;
}

