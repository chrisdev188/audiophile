export type MenuListType = Array<{
  id: number;
  path: string;
  name: string;
}>;
export type ResponsiveImageType = {
  mobile: string;
  tablet: string;
  desktop: string;
};
export type CategoryType = "headphones" | "speakers" | "earphones";
export type ProductType = {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImageType;
  category: CategoryType;
  categoryImage: ResponsiveImageType;
  description: string;
  features: string;
  gallery: {
    first: ResponsiveImageType;
    second: ResponsiveImageType;
    third: ResponsiveImageType;
  };
  new: boolean;
  includes: Array<{ quantity: number; item: string }>;
  others: Array<{ slug: string; name: string; image: ResponsiveImageType }>;
  price: number;
};

export type ProductListType = Array<ProductType>;
