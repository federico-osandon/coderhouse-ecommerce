import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)


