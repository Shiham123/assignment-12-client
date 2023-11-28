import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../SubSection/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const PaymentPage = () => {
  return (
    <div>
      <SectionTitle
        heading="Become a pro user"
        subHeading="pay $100 to become pro user"
      />
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
