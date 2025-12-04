import Link from "next/link";

export default async function ProductDetails(
    { params }: { params: Promise<{ productId: string }> }
) {
    const productId = (await params).productId;
    // const { productId } = await params;
    return (
        <>
            <h1>Product details {productId}</h1>
            <Link href={`/products/${productId}/reviews`}>Reviews for product {productId}</Link>
        </>
    )
}