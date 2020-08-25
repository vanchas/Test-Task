export const positions = [
  { title: "Right" },
  { title: "Top" },
  { title: "Left" },
  { title: "Bottom" },
];

export const filePickerHandler = (e, setImage) => {
  if (FileReader && e.target.files && e.target.files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      setImage(fr.result);
    };
    fr.readAsDataURL(e.target.files[0]);
  }
};
