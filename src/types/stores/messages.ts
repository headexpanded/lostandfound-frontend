import type { 
  Message, 
  MessageThread, 
  MessageState, 
  MessageFilters, 
  CreateMessageForm, 
  UpdateMessageForm,
  Notification,
  NotificationPreferences
} from '../api/message';

// Messages store actions
export interface MessagesActions {
  // CRUD actions
  fetchMessages(filters?: MessageFilters): Promise<void>;
  fetchMessage(id: number): Promise<void>;
  sendMessage(messageData: CreateMessageForm): Promise<void>;
  updateMessage(id: number, messageData: UpdateMessageForm): Promise<void>;
  deleteMessage(id: number): Promise<void>;
  
  // Thread actions
  fetchThreads(): Promise<void>;
  fetchThread(threadId: string): Promise<void>;
  setCurrentThread(thread: MessageThread | null): void;
  
  // Message status actions
  markAsRead(messageId: number): Promise<void>;
  markThreadAsRead(threadId: string): Promise<void>;
  markAllAsRead(): Promise<void>;
  
  // Filter actions
  applyFilters(filters: MessageFilters): Promise<void>;
  clearFilters(): void;
  
  // State management actions
  setMessages(messages: Message[]): void;
  addMessage(message: Message): void;
  updateMessageInList(id: number, updates: Partial<Message>): void;
  removeMessageFromList(id: number): void;
  setThreads(threads: MessageThread[]): void;
  addThread(thread: MessageThread): void;
  updateThread(threadId: string, updates: Partial<MessageThread>): void;
  removeThread(threadId: string): void;
  setLoading(loading: boolean): void;
  setSending(sending: boolean): void;
  setError(error: string | null): void;
  clearError(): void;
  
  // Unread count management
  updateUnreadCount(): void;
  incrementUnreadCount(): void;
  decrementUnreadCount(): void;
  
  // Cache management
  clearCache(): void;
  invalidateCache(): void;
}

// Messages store getters
export interface MessagesGetters {
  // Computed properties
  hasMessages: boolean;
  hasThreads: boolean;
  totalMessages: number;
  totalThreads: number;
  unreadMessages: Message[];
  readMessages: Message[];
  
  // Thread getters
  sortedThreads: MessageThread[];
  unreadThreads: MessageThread[];
  readThreads: MessageThread[];
  
  // Filter getters
  filteredMessages: Message[];
  activeFilters: MessageFilters;
  hasActiveFilters: boolean;
  
  // Current thread getters
  currentThreadMessages: Message[];
  currentThreadUnreadCount: number;
  
  // Utility getters
  isLoading: boolean;
  isSending: boolean;
  hasError: boolean;
  errorMessage: string | null;
  unreadCount: number;
}

// Complete messages store type
export interface MessagesStore extends MessageState, MessagesActions, MessagesGetters {}

// Messages store options for Pinia
export interface MessagesStoreOptions {
  id: string;
  state: () => MessageState;
  getters: MessagesGetters;
  actions: MessagesActions;
}

// Notifications store actions
export interface NotificationsActions {
  // CRUD actions
  fetchNotifications(): Promise<void>;
  markAsRead(notificationId: number): Promise<void>;
  markAllAsRead(): Promise<void>;
  deleteNotification(notificationId: number): Promise<void>;
  
  // Preferences actions
  fetchPreferences(): Promise<void>;
  updatePreferences(preferences: Partial<NotificationPreferences>): Promise<void>;
  
  // Real-time actions
  addNotification(notification: Notification): void;
  removeNotification(notificationId: number): void;
  
  // State management actions
  setNotifications(notifications: Notification[]): void;
  setPreferences(preferences: NotificationPreferences): void;
  setLoading(loading: boolean): void;
  setError(error: string | null): void;
  clearError(): void;
  
  // Unread count management
  updateUnreadCount(): void;
  incrementUnreadCount(): void;
  decrementUnreadCount(): void;
}

// Notifications store getters
export interface NotificationsGetters {
  // Computed properties
  hasNotifications: boolean;
  totalNotifications: number;
  unreadNotifications: Notification[];
  readNotifications: Notification[];
  
  // Utility getters
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
  unreadCount: number;
  preferences: NotificationPreferences;
}

// Complete notifications store type
export interface NotificationsStore {
  notifications: Notification[];
  unreadCount: number;
  preferences: NotificationPreferences;
  isLoading: boolean;
  error: string | null;
}

export interface NotificationsStoreComplete extends NotificationsStore, NotificationsActions, NotificationsGetters {} 