"use client";
import React, { createContext } from 'react';
import PaymentForm from '@/app/payment/components/PaymentForm';

export default function PaymentPage() {
  return (
    <div>
      <h1>Make a Payment</h1>
      <PaymentForm />
    </div>
  );
}
