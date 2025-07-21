import type { 
  LostItem, 
  LostItemDetails, 
  LostItemState, 
  LostItemFilters, 
  CreateLostItemForm, 
  UpdateLostItemForm,
  LostItemSearchResponse,
  LostItemStats
} from '../api/lost-item';

// Lost items store actions
export interface LostItemsActions {
  // CRUD actions
  fetchItems(filters?: LostItemFilters): Promise<void>;
  fetchItem(id: number): Promise<void>;
  createItem(itemData: CreateLostItemForm): Promise<void>;
  updateItem(id: number, itemData: UpdateLostItemForm): Promise<void>;
  deleteItem(id: number): Promise<void>;
  
  // Search and filter actions
  searchItems(query: string, filters?: LostItemFilters): Promise<void>;
  applyFilters(filters: LostItemFilters): Promise<void>;
  clearFilters(): void;
  loadMoreItems(): Promise<void>;
  
  // User's items actions
  fetchMyItems(): Promise<void>;
  refreshMyItems(): Promise<void>;
  
  // State management actions
  setCurrentItem(item: LostItemDetails | null): void;
  setItems(items: LostItem[]): void;
  addItem(item: LostItem): void;
  updateItemInList(id: number, updates: Partial<LostItem>): void;
  removeItemFromList(id: number): void;
  setLoading(loading: boolean): void;
  setSearching(searching: boolean): void;
  setError(error: string | null): void;
  clearError(): void;
  
  // Statistics actions
  fetchStats(): Promise<void>;
  
  // Cache management
  clearCache(): void;
  invalidateCache(): void;
}

// Lost items store getters
export interface LostItemsGetters {
  // Computed properties
  hasItems: boolean;
  hasMyItems: boolean;
  totalItems: number;
  totalMyItems: number;
  filteredItems: LostItem[];
  sortedItems: LostItem[];
  
  // Search and filter getters
  searchResults: LostItem[];
  activeFilters: LostItemFilters;
  hasActiveFilters: boolean;
  
  // Pagination getters
  canLoadMore: boolean;
  currentPage: number;
  totalPages: number;
  
  // Statistics getters
  stats: LostItemStats | null;
  itemsByCategory: Record<string, number>;
  
  // Utility getters
  isLoading: boolean;
  isSearching: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

// Complete lost items store type
export interface LostItemsStore extends LostItemState, LostItemsActions, LostItemsGetters {}

// Lost items store options for Pinia
export interface LostItemsStoreOptions {
  id: string;
  state: () => LostItemState;
  getters: LostItemsGetters;
  actions: LostItemsActions;
} 