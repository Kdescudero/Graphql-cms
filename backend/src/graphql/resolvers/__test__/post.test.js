import { isFunction } from "fogg-utils";
import post from "../post";

describe("#Query", () => {
  it("should have getPost method", async () => {
    expect(isFunction(post.Query.getPost)).toBe(true);
  });
});

describe("#Mutation", () => {
  it("should have createPost method", async () => {
    expect(isFunction(post.Mutation.createPost)).toBe(true);
  });
});
