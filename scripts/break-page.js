function displayBreaks() {
    // pull information from nutritional breaks
  db.collection("BreakTypes").doc("NutritionalBreaks")
    .onSnapshot(BreaksDoc => {
      document.getElementById("water").innerText = BreaksDoc.data().water;
      document.getElementById("food").innerText = BreaksDoc.data().food;
    });
    // pull information from exercise breaks
  db.collection("BreakTypes").doc("ExerciseBreaks")
    .onSnapshot(BreaksDoc => {
      document.getElementById("stretch").innerText = BreaksDoc.data().stretch;
    });
    // pull information from relaxation breaks
  db.collection("BreakTypes").doc("RelaxationBreaks")
    .onSnapshot(BreaksDoc => {
      document.getElementById("meditation").innerText = BreaksDoc.data().meditation;
    });

  }
  displayBreaks();