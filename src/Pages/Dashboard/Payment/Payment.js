import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvmDrE6wOZ8kSGoMLwmvg25nmD9NaV1y8TKpztlUXCRA9uRyhDTLh6NZ2wqjhlzgC3DaLkIk2FvFPuOCjzLu3gy003DHu4yiI')


const Payment = () => {
      const { paymentId } = useParams()
      const [payment, setPayment] = useState({})

      useEffect(() => {
            fetch(`https://peaceful-citadel-92019.herokuapp.com/booking/${paymentId}`)
                  .then(res => res.json())
                  .then(data => setPayment(data))
      }, [paymentId]);

      return (
            <div>
                  <h2>Please Pay For {payment?.name}</h2>
                  <h1>$ {payment?.price}</h1>
                  {payment?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm
                              payment={payment}
                        />
                  </Elements>}
            </div>
      );
};

export default Payment;