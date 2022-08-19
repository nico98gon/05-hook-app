import { useEffect } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    
    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
        setCoords({ x, y });
        }
        
        windows.addEventListener( 'mousemove', onMouseMove );

        return () => {
            windows.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);
    
    
    
    return (
        <>
        <h3>Mensaje usuario</h3>
        { JSON.stringify( coords )}
        </>
    )
}
