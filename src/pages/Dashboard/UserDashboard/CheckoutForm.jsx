import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { MdPayment } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import useCart from '../../../Hooks/useCart'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
  const elements = useElements();
  const [error , setError] = useState('')
  const [clientSecret , setClientSecret] = useState('')
  const [transactionId , setTrasactionId] = useState('')
  const navigate = useNavigate();

  const {user} = useAuth();
  const axiousSecure = useAxiousSecure()
  const [cart , refetch] = useCart();
   const totalPrice = cart.reduce((sum,item)=> sum + item.price , 0)

   //console.log('clentsecret' , clientSecret);




  useEffect(()=>{
  if(totalPrice > 0){
      axiousSecure.post('/create-payment-intent' , {price: totalPrice})
    .then(res => {
      setClientSecret(res.data.clientSecret)
      console.log('client secret' , res.data.clientSecret);
    })
    
  }

  },[axiousSecure , totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if(error){
        console.log("eror" , error);
        setError(error.message)
    }
    else{
        console.log('paymethod' , paymentMethod);
        setError('')
    }

    // confirm payment
    const {paymentIntent , error: confimrError} = await stripe.confirmCardPayment(clientSecret , {
      payment_method:{
        card: card,
        billing_details:{
          email: user?.email || 'annonymous',
          name: user?.displayName || 'annonymous'
        }
      }
    })
    if(confimrError){
      console.log('confirm error' , confimrError);
    }
    else{
      console.log('payment intent' , paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id' , paymentIntent.id);
        setTrasactionId(paymentIntent.id)

        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date() , //utc time use moment js
          cartIds: cart.map(item=>item._id),
          medicineIds: cart.map(item=>item.product_id),
          transactionId: paymentIntent.id,
          status: 'pending'
        }
        // const res = await axiousSecure.post('/payments' , payment);
        // console.log('post payment in db ' , res.data);
        // if(res.data.insertedId){
        //   toast.success(`${totalPrice} usd Pay successfull`)
        //   refetch()
        //   navigate('/paymenthistory')

        // }
        axiousSecure.post('/payments' , payment)
        .then(res=>{
          console.log('post payment in db ' , res.data);
        if(res.data?.paymentResult?.insertedId){
          toast.success(`${totalPrice} usd Pay successfull`)
          refetch()
          navigate('/dashboard/paymenthistory')

        }
        })
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="p-3">
          <button
            className="btn bg-green-400 text-xl uppercase"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            <MdPayment /> Pay
          </button>
          <p className="text-red-500">{error}</p>
          {
            transactionId && <p className="text-green-500">transaction id: {transactionId}</p>
          }
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
