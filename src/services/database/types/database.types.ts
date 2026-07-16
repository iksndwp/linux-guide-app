import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

/**
 * Interface representing the state of the database service
 */
export interface DatabaseState {
  isReady: boolean;
  error?: Error;
}

/**
 * Interface for database connection details
 */
export interface DatabaseConnectionInfo {
  dbName: string;
  connection: SQLiteDBConnection | null;
}

/**
 * Type alias for the core sqlite instance for dependency injection if needed
 */
export type AppSQLiteConnection = SQLiteConnection;
