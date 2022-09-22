const Intern = require("../lib/Intern");

describe("Intern", () => {
  const name = "Prince Vegeta";
  const id = 2;
  const email = "princeofallsaiyans@gmail.com";
  const school = "The God of Destructions fightning school";
  const role = "Intern";
  const testIntern = new Intern(name, id, email, school);

  it("Should return the correct school", () => {
    expect(testIntern.getSchool()).toBe(school);
  });

  it("Should return the Intern name when requested", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("Should return the Intern id when requested", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("Should return the Intern email when requested", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("Should return the Intern role when requested", () => {
    expect(testIntern.getTeamTitle()).toBe(role);
  });
});
