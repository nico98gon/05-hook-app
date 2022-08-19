import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";


describe('Testing <HomePage />', () => {

    test('should show the component whit out the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label

        expect( preTag.innerHTML ).toBe('null');

    });

    test('should show the component whit the user', () => {

        const user = {
            id: 1,
            name: 'Nico'
        }

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label

        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );

    });

});