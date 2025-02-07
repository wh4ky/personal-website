document.addEventListener('DOMContentLoaded', () => {
  var ageElement: HTMLElement = document.getElementById("age") as HTMLElement;
  const bdate: number = new Date(2008, 3, 21).getTime();
  setInterval(getPreciseAge, 500);

  function getPreciseAge(): void {
    const age: number = (new Date().getTime() - bdate) / 31557600000; // 1000 * 60 * 60 * 24 * 365.25
    ageElement.innerHTML = age.toFixed(8);
  }
});
