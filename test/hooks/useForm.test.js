import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Test on useForm', () => {

    const initialForm = {
        name: 'Nico',
        email: 'nicodevelo@gmail.com'
    }

    test('should return the values by default', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any ( Function ),
            onResetForm: expect.any ( Function ),
        });
    });

    test('should change the name of the form', () => {

        const newValue = 'Augusto'
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    });

    test('should do the reset of the form', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onResetForm } = result.current;

        act(() => {
            // onResetForm( () => {} );
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });
})