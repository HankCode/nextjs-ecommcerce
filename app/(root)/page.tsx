import ProductList from "@/components/shared/product/ProductList";
import ContentContainer from "@/components/ContentContainer";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
};

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <ContentContainer>
      <div className="py-10 space-y-8">
        <ProductList title="Newest Arrivals" data={latestProducts} />
      </div>
    </ContentContainer>
  );
}
