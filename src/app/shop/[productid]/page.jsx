// import ProductShowDetais from "@/Components/Shop/ProductShowDetais";
import ProductDetaisSkeleton from "@/Components/Shop/ProductDetaisSkeleton";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";


async function getData(id) {
	const res = await fetch(
		`https://devita-watchs.vercel.app/assist/productsData/product_${id}.json`
	);
	if (!res.ok) { return notFound(); }
	return res.json();
}


// export dynamic metadata ---------------------------
export async function generateMetadata({ params }) {
	const product = await getData(params.productid);
	return {
		title: product && product.name,
		description: product && product.description,
	};
}



export default async function Productid({ params }) {
	const product = await getData(params.productid);
	console.log(product);

	const ProductShowDetais = dynamic(
		() => import("@/Components/Shop/ProductShowDetais"),
		{ loading: () => <ProductDetaisSkeleton /> }
	);

	return (
		<section>
			{/* <ProductDetais /> */}
			<ProductShowDetais product={product} />
		</section>
	);
}
