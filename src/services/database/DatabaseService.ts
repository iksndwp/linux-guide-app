import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { DatabaseConfig } from './config/database.config';
import { DatabaseState } from './types/database.types';

class DatabaseService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private state: DatabaseState = { isReady: false };

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  /**
   * Initializes the database connection and prepares it for use.
   */
  public async initialize(): Promise<void> {
    try {
      console.log('Initializing database service...');
      
      // Initialize connection but do not run migrations or tables yet
      this.db = await this.sqlite.createConnection(
        DatabaseConfig.name,
        DatabaseConfig.encrypted,
        DatabaseConfig.mode,
        DatabaseConfig.version,
        false // Do not create database file yet until explicitly opened
      );

      await this.open();
      
      this.state.isReady = true;
      console.log('Database initialized successfully.');
    } catch (error) {
      console.error('Failed to initialize database:', error);
      this.state = { isReady: false, error: error as Error };
      throw error;
    }
  }

  /**
   * Opens the database connection
   */
  public async open(): Promise<void> {
    if (!this.db) {
      throw new Error('Database connection has not been created. Call initialize() first.');
    }
    
    const isDbOpen = await this.db.isDBOpen();
    if (!isDbOpen.result) {
      await this.db.open();
    }
  }

  /**
   * Closes the database connection
   */
  public async close(): Promise<void> {
    if (this.db) {
      const isDbOpen = await this.db.isDBOpen();
      if (isDbOpen.result) {
        await this.db.close();
      }
    }
  }

  /**
   * Check if the database service is fully ready
   */
  public isReady(): boolean {
    return this.state.isReady;
  }

  /**
   * Expose the raw DB connection for repositories to use
   */
  public getConnection(): SQLiteDBConnection {
    if (!this.db || !this.state.isReady) {
      throw new Error('Database is not ready. Please initialize first.');
    }
    return this.db;
  }
}

// Export as a singleton
export const dbService = new DatabaseService();
