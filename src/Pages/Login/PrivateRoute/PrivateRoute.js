import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

      const { user, isloading } = useAuth()
      let location = useLocation();

      if (isloading) {
            return <CircularProgress color="success" />
      }

      if (!user?.email) {
            return <Navigate to="/login" state={{ from: location }} />;
      }

      return children;

};

export default PrivateRoute;