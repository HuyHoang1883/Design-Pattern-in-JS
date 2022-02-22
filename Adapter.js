class PhongNH {
 do300ropeSkips() {
   console.log("do 300 rope skips...");
 }
 do50pushups() {
  console.log("do 50 pushups...");
 }
}

class Trainee {
  doExercise() {}
}

//Adapter
class Adapter extends Trainee {
  constructor(clone) {
    super();
    this.clone = clone;
  }

  doExercise() {
    this.clone.do300ropeSkips();
    this.clone.do50pushups();
    console.log("Done!");
  }
}

//Main
const phongNHClone = new PhongNH();
const trainee = new Adapter(phongNHClone);
trainee.doExercise();