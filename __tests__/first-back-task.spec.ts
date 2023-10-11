import { FirstBackTask } from "./../src/first-back-task";


describe("FirstBackTask test", () => {
  it("should get 1 from one package", async () => {
    expect(
      FirstBackTask.getResult(["start", "connect", "message", "end"])
    ).toBe(1);
  });

  it("should get 2 from packages", async () => {
    expect(
      FirstBackTask.getResult([
        "start",
        "connect",
        "message",
        "end",
        "start",
        "connect",
        "message",
        "end",
        "start",
        "connect",
        "message",
      ])
    ).toBe(2);
  });
});
