const Employee = require("../lib/Employee.js");

describe("Getters", () => {
  const name = "Goku";
  const id = 9000;
  const email = "Gokudoesntknowhowtouseemail@gmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("Should return the Employee name when requested", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("Should return the Employee id when requested", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("Should return the Employee email when requested", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("Should return the Employee role when requested", () => {
    expect(testEmployee.getTeamTitle()).toBe(role);
  });
});