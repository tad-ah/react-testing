import React from "react";
import {create} from "react-test-renderer";
import Button, {Text, NestedText} from "./Button";


describe("Button component", () => {
    test("it sets the expected text to state when clicked", () => {
        const component = create(<Button text="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();

        expect(instance.state.text).toBe("");
        instance.handleClick();
        expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
    });

    test("it shows the expected text when clicked", () => {
        const component = create(<Button text="SUBSCRIBE TO BASIC" />);
        const rootInstance = component.root;

        // Check that <Text /> is printing the correct text before clicking
        const text = rootInstance.findByType(Text);
        expect(text.children[0]).toBe("SUBSCRIBE TO BASIC");

        // Check that <NestedText /> is printing the correct text before clicking
        const wrappedText = rootInstance.findByType(NestedText);
        expect(wrappedText.children[0].props.children).toBe("SUBSCRIBE TO BASIC");

        // trigger on click on button
        const button = rootInstance.findByType("button");
        button.props.onClick();

        // Check that <Text /> is printing the correct text after clicking
        expect(text.children[0]).toBe("PROCEED TO CHECKOUT");

        // Check that <NestedText /> is printing the correct text after clicking
        expect(wrappedText.children[0].props.children).toBe("PROCEED TO CHECKOUT");
    });
});