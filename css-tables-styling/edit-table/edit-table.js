// INITIALIZE - DOUBLE CLICK TO EDIT CELL
window.addEventListener("DOMContentLoaded", () => {
  for (let cell of document.querySelectorAll(".editable td")) {
    cell.ondblclick = () => editable.edit(cell);
  }
});

const editable = {
  // PROPERTIES
  selected: null, // current selected cell
  value: "", // current selected cell value

  // "CONVERT" TO EDITABLE CELL
  edit: (cell) => {
    // REMOVE "DOUBLE CLICK TO EDIT"
    cell.ondblclick = "";

    // EDITABLE CONTENT
    cell.contentEditable = true;
    cell.focus();

    // "MARK" CURRENT SELECTED CELL
    cell.classList.add("edit");
    editable.selected = cell;
    editable.value = cell.innerHTML;

    // PRESS ENTER/ESC OR CLICK OUTSIDE TO END EDIT
    window.addEventListener("click", editable.close);
    cell.onkeydown = (evt) => {
      if (evt.key == "Enter" || evt.key == "Escape") {
        editable.close(evt.key == "Enter" ? true : false);
        return false;
      }
    };
  },

  // END "EDIT MODE"
  close: (evt) => {
    if (evt.target != editable.selected) {
      // CANCEL - RESTORE PREVIOUS VALUE
      if (evt === false) {
        editable.selected.innerHTML = editable.value;
      }

      // REMOVE "EDITABLE"
      window.getSelection().removeAllRanges();
      editable.selected.contentEditable = false;

      // RESTORE CLICK LISTENERS
      window.removeEventListener("click", editable.close);
      let cell = editable.selected;
      cell.onkeydown = "";
      cell.ondblclick = () => editable.edit(cell);

      // "UNMARK" CURRENT SELECTED CELL
      editable.selected.classList.remove("edit");
      editable.selected = null;
      editable.value = "";

      // DO WHATEVER YOU NEED
      if (evt !== false) {
        console.log(cell.innerHTML);
        // check value?
        // send value to server?
        // update calculations in table?
      }
    }
  },
};
