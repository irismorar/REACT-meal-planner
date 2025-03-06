import { useState } from "react";
import "./App.css";
import { mealOptions } from "./mealOptions";

function MealsList({ breakfastList, setBreakfastList }) {
  return (
    <div className="meals_container">
      <h2>Meals</h2>
      <ul>
        {mealOptions.map((mealOption) => {
          return (
            <li className="meal_li" key={mealOption}>
              {mealOption}
              <div className="meals_buttons_container">
                <button
                  onClick={() => {
                    const newBreakfastState = [...breakfastList, mealOption];
                    setBreakfastList(newBreakfastState);
                    console.log(breakfastList);
                  }}
                  disabled={breakfastList.includes(mealOption)}
                >
                  Breakfast
                </button>
                <button>Lunch</button>
                <button>Dinner</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BreakfastMeals({ breakfastList, setBreakfastList }) {
  return (
    <div className="breakfast_meals_container">
      <h2>Breakfast</h2>
      <ul>
        {breakfastList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                const newState = breakfastList.filter((_, i) => index !== i);
                setBreakfastList(newState);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LunchMeals() {
  return (
    <div className="lunch_meals_container">
      <h2>Lunch</h2>
      <ul></ul>
    </div>
  );
}

function DinnerMeals() {
  return (
    <div className="dinner_meals_container">
      <h2>Dinner</h2>
      <ul></ul>
    </div>
  );
}

export default function App() {
  const [breakfastList, setBreakfastList] = useState([]);
  const [lunchList, setLunchList] = useState([]);
  const [dinnerList, setDinnerList] = useState([]);

  return (
    <>
      <h1>Meal Planner App</h1>
      <div className="main_container">
        <MealsList
          breakfastList={breakfastList}
          setBreakfastList={setBreakfastList}
        />
        <section>
          <BreakfastMeals
            breakfastList={breakfastList}
            setBreakfastList={setBreakfastList}
          />
          <LunchMeals />
          <DinnerMeals />
        </section>
      </div>
    </>
  );
}
