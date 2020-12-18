import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE)

const CartExample = () => (
  <Layout>
    <SEO title="Dev Shirts" />
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
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
