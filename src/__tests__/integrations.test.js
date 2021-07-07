import { mount } from "enzyme";
import React from "React";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment fetch 1" }, { name: "Comment fetch 2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});
it("can fetch a list of comments and display them", (done) => {
  //Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the fetchComment button and simulate clicking it
  wrapped.find(".fetch-comments").simulate("click");

  //Expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
