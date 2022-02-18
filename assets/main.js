// ========== show hidden input ========
const showHiddenInput = (inputOverlay, inputPass, inputIcon) => {
  const overlay = document.getElementById(inputOverlay);

  const input = document.getElementById(inputPass);

  const iconEye = document.getElementById(inputIcon);

  iconEye.addEventListener("click", () => {
    // change password to text
    if (input.type === "password") {
      //switch to text
      input.type = "text";

      // change icon
      iconEye.classList.add("bx-show");
    } else {
      // change to password
      input.type = "password";

      // remove icon
      iconEye.classList.remove("bx-show");
    }

    overlay.classList.toggle("overlay-content");
  });
};

showHiddenInput("input-overlay", "input-password", "input-icon");
