import { ThirdBackTask } from "./../src/third-back-task";

describe("SecondBackTask test", () => {
  it("should get 44232323", async () => {
    expect(ThirdBackTask.getResult("2{4}3{23}")).toBe("44232323");
  });
  
  it("should get 44", async () => {
    expect(ThirdBackTask.getResult("2{4}")).toBe("44");
  });
  it("should get 9222922292229222", async () => {
    expect(ThirdBackTask.getResult("4{93{2}}")).toBe("9222922292229222");
  });

  it("should get empty value", async () => {
    expect(ThirdBackTask.getResult("")).toBe("");
  });
});
