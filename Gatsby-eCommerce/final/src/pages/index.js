import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
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
      <Skus />
    </CartProvider>
  </Layout>
)

export default CartExample
