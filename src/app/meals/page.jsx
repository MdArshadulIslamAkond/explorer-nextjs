import Search from "@/components/Search";
import styles from "./styles.module.css";
export const metadata = {
  // title:"Meals",
  title: {
    absolute: "Meals",
  },
  description: "Meals page"
}
const MealsPage = () => {
  return (
    <div className="text-center my-10 p-6 space-y-4">
      <div>
        <h1>Choose Your Meals</h1>
        <p className={styles.font_tomato}>
          choose meals of you choiceby searching......
        </p>
      </div>

      <Search />
    </div>
  );
};

export default MealsPage;
