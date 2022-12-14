const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, username) {
    super(name, id, email);
    this.username = username;
  }
  getGithubU() {
    return `<a href="https://github.com/${this.username}" target="_blank">https://github.com/${this.username}</a>`;
  }
  getTeamTitle() {
    return "Engineer";
  }
}

module.exports = Engineer;
