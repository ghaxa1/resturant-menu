import React from "react";
import MenuPage from "../../components/template/MenuPage";

function Menu({ menuItems }) {
  return (
    <div>
     <MenuPage data={menuItems}/>
    </div>
  );
}

export default Menu;
export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();
  return {
    props: { menuItems: data },
    revalidate: 60,
  };
}
