import React, {useState} from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./data"

const allCategories = ["All",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

//const allCategories = [...new Set(data.map((item)=>{return item.category}))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data)

  const filterItems =(category)=>{     //filter มีหน้าที่กรองข้อมูลที่เราส่งมา ดูว่าค่าที่ใส่เข้ามาตรงกันไหม
    if(category === "All") {           //
      setMenuItems(data)
    }
    else{
      const newItems = data.filter(
      (item) => item.category === category
      )
      setMenuItems(newItems) 
    }
  }

  return (
    <div>
      <h1>Workshop 2 : Food Menu</h1>
      <main>
        <section className="menu section">
          <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems}/>
          <Menu item ={menuItems}/>
        </section>
      </main>
    </div>
  );
};

export default App;
