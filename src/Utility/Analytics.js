
const timerInput = 2000;

export const intervalId = setInterval(() => {
  console.log("start analytics....");
}, timerInput);

document.getElementById("btnCreate").addEventListener("click", () => {
  clearInterval(intervalId);
});
