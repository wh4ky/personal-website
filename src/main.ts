var headerElement: HTMLElement = document.querySelector("header") as HTMLElement;
var footerElement: HTMLElement = document.querySelector("footer") as HTMLElement;

headerElement.innerHTML = `
    <div><a href="/">Home</a></div>
    <div><a href="/contact/">Contact</a></div>
    <div><a href="/blog/">Blog</a></div>
`;

footerElement.innerHTML = `
    <div class="title">Honorable peeps:</div>

    <div class="item" title="MY FUCKING SIS, LET'S FUCKING GET IT YO">
      <a href="https://prpl.wtf/">
        <p>Emma</p>
      </a>
    </div>

    <div class="item" title="MY FUCKING G, MY BOY FOR FUCKING LIFE">
      <a href="https://jswdev.nl/">
        <p>JSW</p>
      </a>
    </div>

    <div class="item" title="THE FUCKING DOLPHIN, MY BOY FOR REAL">
      <a href="https://geen-dolfijn.nl/">
        <p>Definitely-Not-A-Dolphin</p>
      </a>
    </div>
`;
