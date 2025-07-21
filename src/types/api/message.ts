// Message entity
export interface Message {
  id: number;
  from_user_id: number;
  to_user_id: number;
  lost_item_id: number;
  message: string;
  read: boolean;
  created_at: string;
  updated_at: string;
  from_user: {
    id: number;
    name: string;
    email: string;
  };
  to_user: {
    id: number;
    name: string;
    email: string;
  };
  lost_item: {
    id: number;
    title: string;
    location: string;
  };
}

// Message thread (grouped messages)
export interface MessageThread {
  id: string; // Combination of users and lost item
  lost_item: {
    id: number;
    title: string;
    location: string;
    status: string;
  };
  other_user: {
    id: number;
    name: string;
    email: string;
  };
  messages: Message[];
  unread_count: number;
  last_message?: Message;
  created_at: string;
  updated_at: string;
}

// Message form types
export interface CreateMessageForm {
  to_user_id: number;
  lost_item_id: number;
  message: string;
}

export interface UpdateMessageForm {
  message: string;
}

// Message filters
export interface MessageFilters {
  read?: boolean;
  lost_item_id?: number;
  from_user_id?: number;
  to_user_id?: number;
  dateFrom?: string;
  dateTo?: string;
}

// Message state for store
export interface MessageState {
  messages: Message[];
  threads: MessageThread[];
  currentThread: MessageThread | null;
  filters: MessageFilters;
  isLoading: boolean;
  isSending: boolean;
  error: string | null;
  unreadCount: number;
}

// Notification types
export interface Notification {
  id: number;
  type: 'message' | 'lost_item_update' | 'system';
  title: string;
  message: string;
  data?: Record<string, unknown>;
  read: boolean;
  created_at: string;
}

export interface NotificationPreferences {
  email_notifications: boolean;
  push_notifications: boolean;
  message_notifications: boolean;
  lost_item_notifications: boolean;
  system_notifications: boolean;
}

// Notification state
export interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  preferences: NotificationPreferences;
  isLoading: boolean;
  error: string | null;
} 