import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useSecureApi from '../../Hooks/useSecureApi';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const secureApi = useSecureApi();
  const { user } = useAuth();
  const navigate = useNavigate();

  const totalPrice = 100;

  useEffect(() => {
    secureApi
      .post('/create-payment-intent', { price: totalPrice })
      .then((response) => {
        console.log(response.data);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => console.log(error));
  }, [secureApi]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    // Payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    error
      ? (console.log(error), setError(error))
      : console.log('paymentMethod', paymentMethod);

    // payment intent
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log('confirm error', confirmError);
    } else {
      console.log('intent payment', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const orderInfo = {
          email: user.email,
          name: user.displayName,
          price: totalPrice,
          transactionId: paymentIntent.id,
          status: 'pro-user',
        };

        secureApi
          .post('/payment-history', orderInfo)
          .then((response) => {
            console.log(response);
            if (response.data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'now you are a pro user',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          })
          .catch((error) => console.log(error));

        secureApi
          .patch(`/pro/${user.email}`, { role: 'pro-user' })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
    }
  };

  const cardElementStyle = {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-12 border-[1px] bg-colorTwo m-12 rounded-lg"
    >
      <CardElement options={{ style: cardElementStyle }}></CardElement>
      <button
        disabled={!stripe || !clientSecret}
        className="bg-colorFive px-4 py-2 text-xl hover:bg-transparent border-2 border-colorFive font-poppins"
      >
        Pay
      </button>

      {transactionId && (
        <p className="font-poppins text-xl text-colorOne">
          Your transactionId :{' '}
          <span className="font-semibold">{transactionId}</span>
        </p>
      )}

      {error && (
        <p className="font-poppins text-2xl text-red-500">{error.message}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
