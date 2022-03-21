import { Alert, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ payment }) => {
      const { price, displayName, _id } = payment;

      const stripe = useStripe();
      const elements = useElements();

      const [error, setError] = useState('')
      const [success, setSuccess] = useState('')
      const [clientSecret, setClientSecret] = useState('')
      const [processing, setProcessing] = useState(false)

      useEffect(() => {
            fetch('https://peaceful-citadel-92019.herokuapp.com/create-payment-intent', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify({ price })
            })
                  .then(res => res.json())
                  .then(data => setClientSecret(data.clientSecret));
      }, [price]);


      const handleSubmit = async (e) => {
            e.preventDefault()

            if (!stripe || !elements) {
                  // Stripe.js has not loaded yet. Make sure to disable
                  // form submission until Stripe.js has loaded.
                  return;
            }

            const card = elements.getElement(CardElement);

            if (card == null) {
                  return;
            }
            setProcessing(true)

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card,
            });

            if (error) {
                  setError(error.message)
                  setSuccess('')
            } else {
                  setError('')
                  console.log('[PaymentMethod]', paymentMethod);
            }

            //payment intent
            const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    name: displayName,
                              },
                        },
                  },
            );

            if (intentError) {
                  setError(intentError.message)
                  setSuccess('')
            }
            else {
                  setError('');
                  setSuccess('Successfull !!!')
                  console.log(paymentIntent);
                  setProcessing(false)

                  //save to database

                  const payment = {
                        ammount: paymentIntent.amount,
                        created: paymentIntent.created,
                        transaction: paymentIntent.client_secret.slice('_secret')[0]
                  }
                  const url = `https://peaceful-citadel-92019.herokuapp.com/booking/${_id}`

                  fetch(url, {
                        method: 'PUT',
                        headers: {
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(payment)
                  })
                        .then(res => res.json())
                        .then(data => console.log(data))
            }

      }
      return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <form style={{ width: '50%', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {

                                          base: {
                                                fontSize: '20px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        {processing ? <CircularProgress /> : <button style={{ marginTop: '12px', fontSize: '20px', padding: '6px' }} type="submit" disabled={!stripe || success}>
                              Pay
                        </button>}
                        <br />
                        {
                              error &&
                              <Alert severity="error">{error}!</Alert>

                        }
                        {
                              success &&
                              <Alert severity="success">{success}!</Alert>

                        }
                  </form>

            </div>
      );
};

export default CheckoutForm;