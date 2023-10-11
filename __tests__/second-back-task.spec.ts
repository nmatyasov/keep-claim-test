import { SecondBackTask } from "./../src/second-back-task";

describe("SecondBackTask test", () => {
  it("should get number 3", async () => {
    expect(SecondBackTask.getResult(7, 3)).toBe(3);
  });

  it("should get number 5", async () => {
    expect(SecondBackTask.getResult(5, 123456789)).toBe(5);
  });

  it("should get number 0", async () => {
    expect(SecondBackTask.getResult(0.5, 123456789)).toBe(0);
  });
  it("should get number 0", async () => {
    expect(SecondBackTask.getResult(5, 0.1)).toBe(0);
  });
});
