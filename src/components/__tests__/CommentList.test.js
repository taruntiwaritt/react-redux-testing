import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";
let wrapped;
beforeEach(() => {
  const initialState = { comments: ["one Comment", "Second comment"] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows text per comment", () => {
  expect(wrapped.render().text()).toContain("one Comment");
  expect(wrapped.render().text()).toContain("Second comment");
});
