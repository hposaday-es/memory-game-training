import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import startFormStyles from './startForm.module.css';

class StartForm extends React.Component { 

    render () {
        return (
            <Container className={startFormStyles.container} maxWidth="sm">
                <form>
                    <Grid 
                        container 
                        spacing={2}  
                        alignItems="center" >
                        
                        <Grid 
                            item
                            className={startFormStyles.label}
                            xs={12}
                        >
                            <span>
                                Cual es tu Nombre?
                            </span>
                        </Grid>
                        <Grid 
                            item 
                            className={startFormStyles.textItem}
                            xs={6}
                        >
                            <TextField 
                                id='outlined-basic' 
                                label='nombre' 
                                variant='outlined'
                                className={startFormStyles.input} 
                            />
                        </Grid>
                        <Grid 
                            item  
                            xs={6}
                        >
                            <Button 
                                className={startFormStyles.button}
                                variant="contained"
                            >
                                Hecho
                            </Button>
                        </Grid>
                     
                    </Grid>
                </form>
              
            </Container>
        )
    }
}

export default StartForm;