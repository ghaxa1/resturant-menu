import { notFound } from "next/navigation";
import React from "react";
import FoodDetail from "../../components/template/FoodDetail";

function foodId({ data }) {
  return (
    <div>
      <FoodDetail {...data} />
    </div>
  );
}

export default foodId;
export async function getStaticPaths() {
  const respons = await fetch("http://localhost:4000/data");
  const data = await respons.json();
  const paths = data.map((item) => {
    return { params: { foodId: String(item.id) } };
  });
  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const respons = await fetch(`http://localhost:4000/data/${params.foodId}`);
  const data = await respons.json();
  if (!data.id) {
    return { notFound: true };
  }
  return { props: { data }, revalidate: 20 };
}
