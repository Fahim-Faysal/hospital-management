import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

      const [email, setEmail] = useState('')
      const [success, setSuccess] = useState(false)

      const handelAdmin = (e) => {
            const user = { email }
            e.preventDefault()
            fetch('https://peaceful-citadel-92019.herokuapp.com/user', {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              setEmail('')
                              setSuccess(true)
                        }

                  })

      }

      return (
            <div>

                  <form onSubmit={handelAdmin}>
                        <TextField onBlur={e => setEmail(e.target.value)} style={{ width: '50%', margin: '15px' }} label="Email" type='email' variant="filled" placeholder='Enter the email address' required />
                        <br />
                        <Button type='submit' variant="contained">Make Admin</Button>
                  </form>
                  {
                        success &&
                        <Alert sx={{ width: '25%', margin: 'auto', marginTop: "15px" }} severity="success">Making Admin Successfully!</Alert>

                  }

            </div>
      );
};

export default MakeAdmin;