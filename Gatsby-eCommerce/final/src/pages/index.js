import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE)

const url = typeof window !== 'undefined' ? window.location.origin: null;

const CartExample = () => (
  <Layout>
    <SEO title="Dev Shirts" />
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${url}/page-2/`}
      cancelUrl={`${url}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Products />
    </CartProvider>
  </Layout>
)

export default CartExample
