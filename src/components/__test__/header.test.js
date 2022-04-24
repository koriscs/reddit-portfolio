import {render, screen, cleanup } from "@testing-library/react"
import Header from "../Header";

test('Should render Header component', () => {
    render(<Header />);
    const todoElement = screen.getAllByTestId();

})