import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";

const Header = async () => {
  // const categories = await getAllCategories();

  return (
    <header className="w-full border-b">
      <ContentContainer className="flex justify-between items-center h-16">
        <div className="flex justify-start items-center">
          {/* <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Select a category</DrawerTitle>
                <div className="space-y-1">
                  {categories.map((category: { name: string }) => (
                    <Button
                      className="w-full justify-start"
                      variant="ghost"
                      key={category.name}
                      asChild
                    >
                      <DrawerClose asChild>
                        <Link href={`/search?category=${category.name}`}>{category.name}</Link>
                      </DrawerClose>
                    </Button>
                  ))}
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer> */}
          <Link href="/" className="flex-start">
            {/* <Image src="/assets/icons/logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} /> */}
            {APP_NAME}
          </Link>
        </div>
        {/* <div className="hidden md:block">
          <Search />
        </div> */}
        {/* <Menu /> */}
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signin">
              <UserIcon />
              Sign in
            </Link>
          </Button>
        </div>
      </ContentContainer>
      {/* <div className="md:hidden block   px-5 pb-2">
        <Search />
      </div> */}
    </header>
  );
};

export default Header;
