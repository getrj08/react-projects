import React, { useEffect, useState } from 'react'
import {Alert , Button} from 'react-bootstrap'


const ToggleComponents = () => {

const simulateNetworkCall = () => {
    return new Promise((resolve) => setTimeout(resolve , 5000));
}

const [show, setShow] = useState(false)
const [isLoading , setIsLoading] = useState(false)

useEffect(() => {
    console.log('calling isLoading')
    simulateNetworkCall().then(() => {
        setIsLoading(false)
    })
    
} , [isLoading])



    return (
        <>
            <Button variant='primary' onClick={(e) => setIsLoading(!isLoading)} > 
                {isLoading ? 'Loading...' : 'Click to Load'}
            </Button>
            {show ? 'data is Loaded' : null}
        </>
    )

}

export default ToggleComponents