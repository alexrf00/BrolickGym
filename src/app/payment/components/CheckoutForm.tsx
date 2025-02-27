
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const cardElement = elements?.getElement(CardElement);
    if (!stripe || !cardElement) return;

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (result.error) {
      console.error('Payment Error:', result.error);
    } else {
      console.log('Payment Successful!', result.paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
