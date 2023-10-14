import React, {useState} from "react";

import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";

import menu from "./data";

const App = () => {
  const [menuData, setMenuData] = useState(menu);

  const categories = menu.map(item => item.category);

  // --unique values from the array with Set()
  //const uniqueCategories = new Set(categories);

  // --unique values from the array with filter()
  const uniqueCategories = categories.filter( (value, index, arr) => arr.indexOf(value) === index);

  const allCategories = ['all', ...uniqueCategories];

  const changeMenuData = (selectedCategory) => {
    if (selectedCategory === 'all') {
      return setMenuData(menu);
    }

    const changedMenu = menu.filter( (item) => item.category === selectedCategory);

    setMenuData(changedMenu);
  };

  return (
      <main className="menu">
        <Title />
        <Buttons categories={allCategories} categoryHandler={changeMenuData}/>
        <Menu data={menuData} />
      </main>
  );
};
export default App;
