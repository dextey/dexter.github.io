const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top :" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("cursorClick");
  setTimeout(() => {
    cursor.classList.remove("cursorClick");
  }, 700);
});
