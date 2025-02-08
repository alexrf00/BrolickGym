'use client';

import axios from 'axios';

export const createPaymentIntent = async (amount: number) => {
  try {
    const response = await axios.post('/api/create-payment-intent', { amount });
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return null;
  }
};
