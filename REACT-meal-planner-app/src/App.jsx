import { useState } from "react";
import "./App.css";
import { mealOptions } from "./mealOptions";

function MealsList({
  breakfastList,
  setBreakfastList,
  lunchList,
  setLunchList,
  dinnerList,
  setDinnerList,
}) {
  return (
    <div className="meals_container">
      <h2>Meals</h2>
      <ul>
        {mealOptions.map((mealOption) => {
          return (
            <li className="meal_li" key={mealOption.id}>
              {mealOption.name}
              <div className="meals_buttons_container">
                <button
                  onClick={() => {
                    const newBreakfastState = [...breakfastList, mealOption];
                    setBreakfastList(newBreakfastState);
                  }}
                  disabled={breakfastList.includes(mealOption)}
                >
                  Breakfast
                </button>
                <button
                  onClick={() => {
                    const newLunchState = [...lunchList, mealOption];
                    setLunchList(newLunchState);
                  }}
                  disabled={lunchList.includes(mealOption)}
                >
                  Lunch
                </button>
                <button
                  onClick={() => {
                    const newDinnerState = [...dinnerList, mealOption];
                    setDinnerList(newDinnerState);
                  }}
                  disabled={dinnerList.includes(mealOption)}
                >
                  Dinner
                </button>
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
              key={item.id}
              onClick={() => {
                const newState = breakfastList.filter((_, i) => index !== i);
                setBreakfastList(newState);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LunchMeals({ lunchList, setLunchList }) {
  return (
    <div className="lunch_meals_container">
      <h2>Lunch</h2>
      <ul>
        {lunchList.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                const newState = lunchList.filter((_, i) => index !== i);
                setLunchList(newState);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DinnerMeals({ dinnerList, setDinnerList }) {
  return (
    <div className="dinner_meals_container">
      <h2>Dinner</h2>
      <ul>
        {dinnerList.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                const newState = dinnerList.filter((_, i) => index !== i);
                setDinnerList(newState);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
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
          lunchList={lunchList}
          setLunchList={setLunchList}
          dinnerList={dinnerList}
          setDinnerList={setDinnerList}
        />
        <section>
          <BreakfastMeals
            breakfastList={breakfastList}
            setBreakfastList={setBreakfastList}
          />
          <LunchMeals lunchList={lunchList} setLunchList={setLunchList} />
          <DinnerMeals dinnerList={dinnerList} setDinnerList={setDinnerList} />
        </section>
      </div>
    </>
  );
}
