import { render, screen } from "@testing-library/react"
import { App } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  
    const title = 'Hola, Soy superman';
  
    test('should to do match with the snapshot ', () => {

        const {container} = render(<App title={title}/>);
        expect( container ).toMatchSnapshot();
      
    });

    test('debe de mostrar el mensaje "Hola, Soy superman" ', () => {
      
        render(<App title={title}/>);
        expect( screen.getByText(title)).toBeTruthy();

    });

    test('debe de mostrar el titulo en un h1', () => {
        
        render(<App title={title}/>);
        expect( screen.getByRole('heading', {level: 2} ).innerHTML).toContain(title);

    })
    
    
    

    

})
