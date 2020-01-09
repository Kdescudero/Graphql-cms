import typeDefs from "../index";

describe("#typeDefs", () => {
  it("Should match the Graphql schema", () => {
    expect(typeDefs).toMatchSnapshot();
  });
});
