import React from 'react';
import DashboardCover from '../../SharedPages/dashboardCover/DashboardCover';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

//Todo
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
console.log("Stripe key:", import.meta.env.VITE_PAYMENT_PK);

const Paymennt = () => {
    return (
        <div>
            <DashboardCover heading={'pay it did'} subheading={'make Payment '}></DashboardCover>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>

                </Elements>
            </div>
        </div>
    );
};

export default Paymennt;