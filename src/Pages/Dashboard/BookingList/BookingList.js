import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Clear } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
const BookingList = () => {

      const { user } = useAuth()
      const [bookings, setBookings] = useState([])
      useEffect(() => {
            fetch(`http://localhost:4000/appointments?email=${user?.email}`)
                  .then(res => res.json())
                  .then(data => setBookings(data))
      }, [])

      const handelDelete = (id) => {
            const proceed = window.confirm('Are you sure you want to delete?')
            if (proceed) {
                  fetch(`http://localhost:4000/appointments?/${id}`, {
                        method: 'DELETE',

                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Delete successfully')
                                    const remaining = bookings.filter(order => order._id !== id)
                                    setBookings(remaining)
                              }
                        })
            }
      }


      return (
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                              <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Service Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Payment</TableCell>

                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {bookings.map((booking) => (
                                    <TableRow
                                          key={booking.name}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                          <TableCell component="th" scope="row">
                                                {user?.displayName}
                                          </TableCell>

                                          <TableCell align="right">{booking?.name}</TableCell>
                                          <TableCell align="right">{booking?.price}</TableCell>

                                          <TableCell align="right">{booking?.payment ? 'Paid' :
                                                <Link style={{ textDecoration: 'none' }} to={`/dashboard/payment/${booking._id}`}><Button>Pay</Button></Link>
                                          }</TableCell>

                                          <Button onClick={() => handelDelete(booking?._id)}> <Clear /></Button>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>
      );
};

export default BookingList;