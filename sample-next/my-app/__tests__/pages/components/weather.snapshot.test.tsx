/**
 * @jest-environment node
 */

import PageComponentWeather from "../../../pages/components/weather";
import { act, create } from "react-test-renderer";

describe("PageComponentWeather", () => {
    test("renders correctly", async () => {
        let component: any;
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>);
        })
        expect(component.toJSON()).toMatchSnapshot();
    });

    test("clicks the h1 element and updates the state", async () => {
        let component: any;
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>);
            component.root.findByType("h1").props.onClick();
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
})