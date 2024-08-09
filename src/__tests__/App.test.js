import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

describe("Run tests on app component", () => {
    test("displays a top-level heading with the text `Hi, I'm _______`", () => {
        //Arrange
        render(<App/>)
    
        //Act
        const topLevelHeading = screen.getByRole("heading", {
            name: /hi, i'm/i,
            exact: false,
            level: 1,
        })
    
        //Assert
        expect(topLevelHeading).toBeInTheDocument();
    }),
    test("Checks for img with alt text identifying the content of the image",() => {
        render(<App />)
        const image = screen.getByRole("img");
        const altr = screen.getByAltText('my-photo');

        expect(image).toBeInTheDocument();
        expect(altr).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "https://unsplash.com/photos/woman-holding-her-hand-standing-beside-trees-IEbIKXo0fBc")
        expect(image).toHaveAttribute("alt", "my-photo")
    }),
    test("Checks for a second-level heading with text `About me`", () => {
        render(<App />)
        const h2 = screen.getByRole("heading", {
            name: /About Me/i,
            level: 2});

        expect(h2).toBeInTheDocument();
    }),
    test("Checks for a biography paragraph", () => {
        const {container} = render(<App />)
        const paragraph = container.querySelector("p");
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent('This is a bio about me.');
    }),
    test("Checks for 2 links: github and linkedin", () => {
        render(<App />)
        const [links] = screen.getAllByRole('link', {name: /GitHub/i, name: /LinkedIn/i})
        expect(links).toBeInTheDocument();
        expect(links).toHaveAttribute("href");
    })
})


