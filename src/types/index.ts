export type MenuListType = Array<{
  id: number;
  path: string;
  name: string;
}>;
type _ResponsiveImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};
export type ProductType = {
  id: number;
  slug: string;
  name: string;
  image: _ResponsiveImage;
  category: string;
  categoryImage: _ResponsiveImage;
  description: string;
  features: string;
  gallery: {
    first: _ResponsiveImage;
    second: _ResponsiveImage;
    third: _ResponsiveImage;
  };
  new: boolean;
  includes: Array<{ quantity: number; item: string }>;
  others: Array<{ slug: string; name: string; image: _ResponsiveImage }>;
  price: number;
};
export type ProductListType = Array<ProductType>;
