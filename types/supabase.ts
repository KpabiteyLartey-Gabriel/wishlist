export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      wishlist_items: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          product_url: string
          price: number
          image_url: string | null
          created_at: string
          priority: number
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          product_url: string
          price: number
          image_url?: string | null
          created_at?: string
          priority: number
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          product_url?: string
          price?: number
          image_url?: string | null
          created_at?: string
          priority?: number
        }
      }
    }
  }
} 