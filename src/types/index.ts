export type User = {
  id: string;
  email: string;
  created_at: string;
};

export type WishlistItem = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  product_url: string;
  price: number;
  image_url: string;
  created_at: string;
  priority: number;
}; 