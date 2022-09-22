const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const name = "Oliver Dirker";
    const id = 1;
    const email = "olliedirker@gmail.com";
    const gitHubUsername = "olliedirker";
    const role = "Engineer";
    const returnedGitHub = `<a href="https://github.com/${gitHubUsername}" target=\"_blank">https://github.com/${gitHubUsername}</a>`;
  
    const testEngineer = new Engineer(name, id, email, gitHubUsername);
  
    it("Should return github linked account", () => {
      expect(testEngineer.getGithubU()).toBe(returnedGitHub);
    });
  
    it("Should return the Engineer name when requested", () => {
      expect(testEngineer.getName()).toBe(name);
    });
  
    it("Should return the Engineer id when requested", () => {
      expect(testEngineer.getId()).toBe(id);
    });
  
    it("Should return the Engineer email when requested", () => {
      expect(testEngineer.getEmail()).toBe(email);
    });
  
    it("Should return the Engineer role when requested", () => {
      expect(testEngineer.getTeamTitle()).toBe(role);
    });
  });