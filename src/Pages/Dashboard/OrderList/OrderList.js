import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Clear } from '@mui/icons-material';
import { Button, Link } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
}

const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const OrderList = () => {

      const { user } = useAuth()
      const [orders, setOrders] = useState([])
      useEffect(() => {
            fetch(`https://peaceful-citadel-92019.herokuapp.com/todaysorder?email=${user?.email}`)
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, [])

      const handelDelete = (id) => {
            const proceed = window.confirm('Are you sure you want to delete?')
            if (proceed) {
                  fetch(`https://peaceful-citadel-92019.herokuapp.com/todaysorder/${id}`, {
                        method: 'DELETE',

                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Delete successfully')
                                    const remaining = orders.filter(order => order._id !== id)
                                    setOrders(remaining)
                              }
                        })
            }
      }


      return (
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                              <TableRow>
                                    <TableCell>User Name</TableCell>
                                    <TableCell align="center">Design Name</TableCell>
                                    {/* <TableCell align="right">Price</TableCell> */}

                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {orders.map((order) => (
                                    <TableRow
                                          key={order?.name}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                          <TableCell component="th" scope="row">
                                                {user?.displayName}
                                          </TableCell>
                                          <TableCell align="center">{order.name} </TableCell>
                                          {/* <TableCell align="right">$ {order?.price}</TableCell> */}

                                          <Button onClick={() => handelDelete(order._id)}> <Clear /></Button>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );
};

export default OrderList;