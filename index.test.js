const dataProvider = require("./data-provider");
const main = require("./index");

describe("sample tests", () => {
  test("should test a value", () => {
    const myValue = "myStringValue";
    expect(myValue).toBe("myStringValue");
  });

  test("should test an object", () => {
    const myObject = { id: 1, name: "foo" };
    expect(myObject).toEqual({ id: 1, name: "foo" });
  });

  test("should test an array", () => {
    const myArray = ["value1", "value2"];
    expect(myArray).toEqual(expect.arrayContaining(["value2", "value1"]));
  });
});

describe("challenge a", () => {
  //TIP: Call main.challengeA
});

describe("challenge b", () => {
  //TIP: Call main.challengeB
});

describe("challenge c", () => {
  //TIP: Call main.challengeC
});
