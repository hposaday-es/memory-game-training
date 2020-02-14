import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class LeaderBoard extends React.Component {

    state = {
        columns: [{
            id: 0,
            name: 'Nombre'
        },
        {
            id: 1,
            name: 'Tiempo'
        }
        ],
        rows: [{
            id: 0,
            name: 'Hector',
            time: '01:30'
        },
        {
            id: 1,
            name: 'Luis',
            time: '01:10'
        }
        ]
    }
    render() {

        return (
            <Container>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                    justify='center'
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <span>Mejores Tiempos</span>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <TableContainer>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        {this.state.columns.map(column => (
                                            <TableCell
                                                key={column.id}
                                            >
                                                {column.name}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                
                                        {this.state.rows.map(row => (
                                            <TableRow  key={row.id}>
                                            <TableCell>
                                                {row.name}
                                            </TableCell>
                                            <TableCell>
                                                {row.time}
                                            </TableCell>
                                            </TableRow>  
                                            
                                        ))}
                                            
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
                    )
                }
            }
            
            
export default LeaderBoard;