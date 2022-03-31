//Lookup holds the product information, broken down as an object of each product type with an array of each individual product.
//Can easily extend to add more relevant information if necessary.

//id is best practice for React arrays to hold index, but doubles to mark out the image pulled for each product
//name is the individual product name (Doesn't support more than one word to the names - something to look into)
//price is product price.
//bag is bag count per case.
//case is a predetermined number of cases needed per window in a display.

export const LOOKUP = {
  "Dip": [
    { id: '--', name: 'Select...', price: '--', bag: '--', case: '--' },
    { id: 'd0', name: 'None', price: '0', bag: '0', case: '0' },
    { id: 'd1', name: 'Salsa', price: '3.48', bag: '12', case: '2' },
    { id: 'd2', name: 'Cheeze', price: '4.48', bag: '12', case: '2' },
    { id: 'd3', name: 'Ranch', price: '4.48', bag: '12', case: '2' }
  ],
    "Potato": [
      { id: '--', name: 'Select...', price: '--', bag: '--', case: '--' },
      { id: 'p1', name: 'Plain', price: '4.09', bag: '12', case: '1.5' },
      { id: 'p2', name: 'Barbeque', price: '4.09', bag: '12', case: '1.5' },
      { id: 'p3', name: 'Onion', price: '4.09', bag: '12', case: '1.5' }
    ],
    "Tortilla": [
      { id: '--', name: 'Select...', price: '--', bag: '--', case: '--' },
      { id: 't1', name: 'Restaurant', price: '4.79', bag: '5', case: '3.6' },
      { id: 't2', name: 'Bowls', price: '4.79', bag: '7', case: '2.6' },
      { id: 't3', name: 'Bites', price: '4.79', bag: '7', case: '2.6' }
    ],
    "Cheeze": [
      { id: '--', name: 'Select...', price: '--', bag: '--', case: '--' },
      { id: 'c1', name: 'Crunchy', price: '3.79', bag: '10', case: '2.4' },
      { id: 'c2', name: 'Hot', price: '3.79', bag: '10', case: '2.4' },
      { id: 'c3', name: 'Puff', price: '3.79', bag: '10', case: '1.3' }
    ]
  }