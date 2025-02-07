document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header") as HTMLElement;
  const footerElement = document.querySelector("footer") as HTMLElement;

  assembleHeader(headerElement);
  assembleFooter(footerElement);
});


// DOM(MY) MANIPULATION FUNCTIONS //

async function assembleHeader(header: HTMLElement) {
  const headerData: Array<{ href: string, text: string }> = [
    { href: '/', text: 'Home' },
    { href: '/contact/', text: 'Contact' },
  ];

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
  const footerData: Array<{ website: string, title: string, text: string }> = [
    { website: 'https://prpl.wtf/', title: `MY FUCKING SIS, LET'S FUCKING GET IT YO`, text: 'Emma' },
    { website: 'https://jswdev.nl/', title: `MY FUCKING G, MY BOY FOR FUCKING LIFE`, text: 'JSW' },
    { website: 'https://geen-dolfijn.nl/', title: `THE FUCKING DOLPHIN, MY BOY FOR REAL`, text: 'Definitely-Not-A-Dolphin' }
  ];

  const fragment = document.createDocumentFragment();

  {
    var titlediv: HTMLDivElement = document.createElement('div');
    titlediv.className = "title";
    titlediv.textContent = "Honorable peeps:";
    fragment.appendChild(titlediv);
  }

  for (const group of footerData) {
    var anchor: HTMLAnchorElement = document.createElement('a');
    var div: HTMLDivElement = document.createElement('div');

    anchor.href = group.website;

    div.className = "item";
    div.title = group.title;
    div.textContent = group.text;

    anchor.appendChild(div);
    fragment.appendChild(anchor)
  }

  footer.appendChild(fragment);
  return;
}

