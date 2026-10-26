declare module 'pg' {
  export class Client {
    constructor(config?: any);
    connect(): Promise<void>;
    query(text: string, values?: any[]): Promise<any>;
    end(): Promise<void>;
  }
  export class Pool {
    constructor(config?: any);
    connect(): Promise<any>;
    query(text: string, values?: any[]): Promise<any>;
    end(): Promise<void>;
  }
}
