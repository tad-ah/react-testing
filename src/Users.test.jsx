import React from "react";
import { create } from "react-test-renderer";
import Users from "./Users";
import axios from 'axios';

// Either
// import FakeClient from "./FakeClient";
// or
import {client} from "./FakeClient";


jest.mock("axios");
jest.mock("./FakeClient");

describe("Users component", () => {
    it("shows a list of users", async () => {

        // Mock axios async response
        const response = {
            data: [{ name: "Kevin Mitnick" }, { name: "Valentino Gagliardi" }]
        };
        axios.get.mockResolvedValue(response);

        // Mock sync method call
        client.getData.mockImplementation(() => [10, 20, 30]);

        const component = create(<Users />);
        const instance = component.getInstance();
        await instance.componentDidMount();

        const root = component.root;
        const listOfLi = root.findAll(element => element.type === "li");
        expect(listOfLi[0].props.children).toBe("Kevin Mitnick");
        expect(listOfLi[1].props.children).toBe("Valentino Gagliardi");

        expect(instance.state.fakeData).toEqual([10, 20, 30]);
    });
});