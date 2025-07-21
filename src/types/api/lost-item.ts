// Lost item categories
export type LostItemCategory = 
  | 'pets'
  | 'electronics'
  | 'clothing'
  | 'jewelry'
  | 'keys'
  | 'documents'
  | 'books'
  | 'sports'
  | 'other';

// Lost item status
export type LostItemStatus = 'active' | 'found' | 'expired';

// Lost item entity
export interface LostItem {
  id: number;
  user_id: number;
  title: string;
  description: string;
  location: string;
  backstory?: string;
  keywords: string[];
  status: LostItemStatus;
  fee_paid: number;
  lost_date?: string;
  category: LostItemCategory;
  images: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

// Lost item with extended data for details view
export interface LostItemDetails extends LostItem {
  messages_count: number;
  views_count: number;
  is_owner: boolean;
  can_edit: boolean;
  can_delete: boolean;
}

// Form types for creating/editing lost items
export interface CreateLostItemForm {
  title: string;
  description: string;
  location: string;
  backstory?: string;
  keywords: string[];
  category: LostItemCategory;
  fee_paid: number;
  lost_date?: string;
  images: File[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface UpdateLostItemForm extends Partial<CreateLostItemForm> {
  status?: LostItemStatus;
}

// Lost item filters for search
export interface LostItemFilters {
  category?: LostItemCategory;
  status?: LostItemStatus;
  location?: string;
  keywords?: string[];
  dateFrom?: string;
  dateTo?: string;
  minFee?: number;
  maxFee?: number;
  radius?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Lost item search response
export interface LostItemSearchResponse {
  items: LostItem[];
  total: number;
  hasMore: boolean;
  filters: LostItemFilters;
}

// Lost item statistics
export interface LostItemStats {
  total_items: number;
  active_items: number;
  found_items: number;
  expired_items: number;
  total_fees: number;
  items_by_category: Record<LostItemCategory, number>;
}

// Lost item state for store
export interface LostItemState {
  items: LostItem[];
  currentItem: LostItemDetails | null;
  myItems: LostItem[];
  filters: LostItemFilters;
  searchQuery: string;
  isLoading: boolean;
  isSearching: boolean;
  error: string | null;
  hasMore: boolean;
  currentPage: number;
  stats: LostItemStats | null;
} 