describe("DemoComponent", () => {
  test("Test should not fail", () => {
    //npm install --save-dev @types/jest

    //To be
    //1. Arrange
    const message = "Hello World";

    //2. act
    const message2 = message.trim();

    //3. assert
    expect(message).toBe(message2);
  });
});
