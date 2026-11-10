import CategoryPage from "../../components/template/CategoryPage";

function categori({ data }) {
  console.log(data)
  return <CategoryPage data={data} />;
}

export default categori;
export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.find(
      (detail) => detail.Difficulty === difficulty,
    );
    const timeResult = item.details.find((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timecook = cookingTime.split(" ")[0];
      const numericTime = +timecook;
      if (time === "less" && numericTime <= 30) {
        return true;
      } else if (time === "more" && numericTime > 30) {
        return true;
      }
    });
    if (time && difficulty && difficultyResult && timeResult) {
      return true;
    } else if (!time && difficulty && difficultyResult) {
      return true;
    } else if (time && !difficulty && timeResult) {
      return true;
    }
  });
  return { props: { data: filteredData } };
}
