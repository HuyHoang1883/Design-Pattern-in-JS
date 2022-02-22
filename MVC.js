//the Model
class TeamMember {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getRoll() {
    return this.roll;
  }
  setRoll(roll) {
    this.roll = roll;
  }
}

//the View
class TeamMemberView {
  printTeamMemberDetails(memberName, memberRoll) {
    console.log(`Team Member:\n  Name: ${memberName}\n  Roll: ${memberRoll}`);
  }
}

//the Controller
class TeamMemberController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  setMemberName(name) {
    this.model.setName(name);
  }
  getMemberName() {
    return this.model.getName();
  }

  setMemberRoll(roll) {
    this.model.setRoll(roll);
  }
  getMemberRoll() {
    this.model.getRoll();
  }

  updateView() {
    this.view.printTeamMemberDetails(this.model.getName(), this.model.getRoll());
  }
}

//MVC App
class MVCApp {
  render() {
    const model = new TeamMember("HaDNM", "SM");
    const view = new TeamMemberView();
    const controller = new TeamMemberController(model, view);

    controller.updateView();
    controller.setMemberName("PhongNH");
    controller.setMemberRoll("Dev");
    controller.updateView();
  }
}

//Main
const app = new MVCApp();
app.render();
