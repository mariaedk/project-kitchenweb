import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodBreakfast =
  [
    {
        id: 1,
        foodName: "Pancakes with Honey",
        foodDetails: "Perfect for a light breakfast; home-made recipe pancakes with honey and sliced Strawberries",
        foodPrice: 12,
        foodImg: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },

      {
        id: 2,
        foodName: "Smooth Smoothie",
        foodDetails: "Healthy smoothie in a Jar; cereals, banana, strawberry, blueberries, yogurt.",
        foodPrice: 6,
        foodImg: "https://images.pexels.com/photos/3679973/pexels-photo-3679973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        id: 3,
        foodName: "Gourmet Breakfast",
        foodDetails: "Bread, fried eggs, sliced peaches, strawberries and blueberries, bacons, chocolate sauce and a cup of coffee.",
        foodPrice: 20,
        foodImg: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
  ]
  // array de objetos de comida
  foodLunch = [
    {
      id: 4,
      foodName: "Hamburger and Fries",
      foodDetails: "Hamburger with extra cheese and salad, along with french fries.",
      foodPrice: 25,
      foodImg: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
      id: 5,
      foodName: "Indian Star",
      foodDetails: "Cooked Rice and Curry with sliced potatoes and peas.",
      foodPrice: 22,
      foodImg: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
      id: 6,
      foodName: "Oishī",
      foodDetails: "Sweet and Sour Pork with Wooden Chopsticks.",
      foodPrice: 20,
      foodImg: "https://images.pexels.com/photos/5848495/pexels-photo-5848495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

  ]

  foodDinner =
  [
    {
      id: 7,
      foodName: "Vegetable Salad",
      foodDetails: "Salad made of lettuce, onions, tomatoes, green and yellow peppers, with carrots. Combined with Orange or Strawberry juice.",
      foodPrice: 15,
      foodImg: "https://images.pexels.com/photos/9275976/pexels-photo-9275976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id: 8,
      foodName: "The King's Plate",
      foodDetails: "Medium-rare steak with baked slices of potato, carrots and green salad.",
      foodPrice: 26,
      foodImg: "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id: 9,
      foodName: "Exclusive 'Kitchen Web' Pasta",
      foodDetails: "Our best-seller: Pasta With Tomato and Basil.",
      foodPrice: 17,
      foodImg: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  foodDessert =
  [
    {
      id: 10,
      foodName: "Chocolate Mousse",
      foodDetails: "Chocolate mousse with cherry or strawberries. Your choice :)",
      foodPrice: 8,
      foodImg: "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
      id: 11,
      foodName: "The Pie",
      foodDetails: "A Delicious slice of pie made of blueberries and strawberries.",
      foodPrice: 15,
      foodImg: "https://images.pexels.com/photos/8105071/pexels-photo-8105071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
      id: 12,
      foodName: "LemonBerry dessert",
      foodDetails: "Lemon mousse with raspberries on a jar.",
      foodPrice: 10,
      foodImg: "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ]
}
