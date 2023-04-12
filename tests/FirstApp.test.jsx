import { render } from "@testing-library/react"
import { App } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  
    test('Should be same to the snapshot', () => {

        const title = 'Hola, Soy Superman';
        const {container} = render(<App title={title}/>)
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el titulo en un h2', () => {

        const title = 'Hola, Soy Superman';
        const {container, getByText, getByTestId} = render(<App title={title}/>)
        expect(getByText(title)).toBeTruthy();

        // const h2 = container.querySelector('h2');
        // expect(h2.innerHTML).toBe(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);
     

    });


    

})
