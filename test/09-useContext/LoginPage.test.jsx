import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


// jest.mock('../../src/hooks/useCounter');

describe('Testing <LoginPage />', () => {

    const setUserMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show the component with out the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label

        expect( preTag.innerHTML ).toBe('null');

    });

    test('should call setUser when click the button', () => {

        const user = {
            id: 123,
            name: 'Nicolás González',
            email: 'nico.1998.13@gmail.com'
        }

        render(
            <UserContext.Provider value={{ user: null , setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const setButton = screen.getByRole('button', { name: 'Set user' });
        fireEvent.click( setButton );

        expect( setUserMock ).toHaveBeenCalledWith( user );

        // expect( click.innerHTML ).toContain( user.name );
        // expect( preTag.innerHTML ).toContain( `${user.id}` );

    });

});