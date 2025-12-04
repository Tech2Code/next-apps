import Link from "next/link";

export default function Products() {
    return (
        <>
            <h1>Products</h1>
            <Link href={'/products/1'}>Product Details 1</Link><br />
            <Link href={'/products/2'}>Product Details 2</Link><br />
            <Link href={'/products/3'}>Product Details 3</Link>
        </>
    )
}