const uploadForm = document.getElementById("uploadForm");
const notesContainer = document.getElementById("notes");

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const subjectInput = document.getElementById("subject");
  const fileInput = document.getElementById("file");
  const subject = subjectInput.value.trim();
  const file = fileInput.files[0];

  if (!subject || !file) {
    alert("Please enter a subject and choose a file.");
    return;
  }

  // Create a temporary browser URL for this selected file.
  const fileUrl = URL.createObjectURL(file);

  const emptyMessage = notesContainer.querySelector(".empty");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  const noteItem = document.createElement("div");
  noteItem.className = "note-item";

  const noteTitle = document.createElement("span");
  noteTitle.textContent = `${subject} — ${file.name}`;

  const downloadLink = document.createElement("a");
  downloadLink.href = fileUrl;
  downloadLink.download = file.name;
  downloadLink.textContent = "Download Notes";

  noteItem.append(noteTitle, downloadLink);
  notesContainer.appendChild(noteItem);

  uploadForm.reset();
  alert("Notes added to the list!");
});

// Note: This demo keeps files only in the current browser session.
// A backend/database is needed to share files between different students.
