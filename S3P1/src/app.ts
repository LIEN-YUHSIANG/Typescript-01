const btn = document.querySelector("button")!;
// `!` let Ts know that we know that the button is not null

btn.addEventListener("click", () => {
  console.log("Clicked");
});

console.log("Time to get started...");
