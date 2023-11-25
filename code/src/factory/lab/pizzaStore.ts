import { CheesePizzaFactory } from './cheesePizzaFactory';
import { ClassicPizzaFactory } from './classicPizzaFactory';
import {
  BreadType,
  CheezeType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';
import { SeafoodPizzaFactory } from './seafoodPizzaFactory';

export class PizzaStore {
  orderPizza(style: PizzaStyle, type: PizzaType, size: PizzaSize) {
    switch (type) {
      case PizzaType.Classic:
        return new ClassicPizzaFactory().bakePizza(style, size);
      case PizzaType.Cheese:
        return new CheesePizzaFactory().bakePizza(style, size);
      case PizzaType.Seafood:
        return new SeafoodPizzaFactory().bakePizza(style, size);
    }
  }
}
