import CategoryPage from "@/src/client/components/Category";
import type { NextPage } from "next";

const CategoryPages: NextPage = (props) => (
	<div>
		<CategoryPage {...props} />
	</div>
);

export default CategoryPages;
