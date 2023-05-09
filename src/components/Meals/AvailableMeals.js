import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Real sushi!',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Amazing pork cutlet',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Sweet! Green Bowl',
    description: 'Healthy...and green...',
    price: 10.99,
  },
  {
    id: 'm4',
    name: 'Hot Barbecue Burger',
    description: 'American, raw, meaty',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal,index) => 
  <MealItem 
    key={meal.id}
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price}>
    {meal.name}
  </MealItem>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;