export interface Product {
  id: number;
  product_type: string;
  product_type_category: string;
  product_brand: string;
  product_color: string;
  product_image?: string;
  price: number;
  investment: number;
  profit_potential: number;
}
// Should be card products longer term.?
export const products = [
  {
    id: 1,
    product_type: 'Felt Hat',
    product_type_category: 'Cowboy Hat',
    product_brand: 'Stetson',
    product_color: 'Black',
    product_image: '/assets/img/hatTypeCategory/old_west.png',
    price: 200,
    investment: 68,
    profit_potential: 130.67
  },
  {
    id: 2,
    product_type: 'Rabbit Hat',
    product_type_category: 'Cowboy Hat',
    product_brand: 'Atwood',
    product_color: 'Bone',
    product_image: '/assets/img/hatTypeCategory/old_west.png',
    price: 200,
    investment: 68,
    profit_potential: 130.67
  },
  {
    id: 3,
    product_type: 'Straw Hat',
    product_type_category: 'Cowboy Hat',
    product_brand: 'Rodeo King',
    product_color: 'Natural',
    product_image: '/assets/img/hatTypeCategory/old_west.png',
    price: 200,
    investment: 68,
    profit_potential: 130.67
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
