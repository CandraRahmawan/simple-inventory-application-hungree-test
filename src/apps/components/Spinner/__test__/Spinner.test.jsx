import Spinner from "../";

describe("<SpinnerUI />", () => {
  const component = shallow(<Spinner />);

  test("Should match to snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
