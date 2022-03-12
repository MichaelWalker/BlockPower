import { render } from "@testing-library/react-native";
import { SampleComponent } from "./SampleComponent";

describe("<SampleComponent />", () => {
    it("Should render 'Hello BlockPower'", () => {
        const renderResult = render(<SampleComponent />);
        expect(renderResult.queryByText("Hello BlockPower!")).not.toBeNull();
    });
});
