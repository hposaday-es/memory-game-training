import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class StartForm extends React.Component { 

    render () {
        return (
            <Container>
                <form>
                    <TextField 
                        id='outlined-basic' 
                        label='nombre' 
                        variant='outlined' />
                </form>
                <Button variant="contained">Hecho</Button>
            </Container>
        )
    }
}

export default StartForm;