import React from "react";
import Card from "../modules/Card";

function MenuPage({ data }) {
  return (
    <div className="max-w-[1000px] flex flex-wrap gap-8 my-24 mx-auto">
      <div className="">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
