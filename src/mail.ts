document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mailForm') as HTMLFormElement;
  const reset = document.getElementById("reset") as HTMLButtonElement;

  const subject = document.getElementById("subject") as HTMLInputElement;
  const body = document.getElementById("body") as HTMLInputElement;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // debug
    alert(`${encodeURI(subject.value)} | WITH | ${encodeURI(body.value)}`);

    window.location.href = `
      mailto:damian.whacky@proton.me
      ?subject=${encodeURI(subject.value)}
      &body=${encodeURI(body.value)}
    `;
  });

  reset.addEventListener("click", function () {
    subject.value = "";
    body.value = "";
  });
});
