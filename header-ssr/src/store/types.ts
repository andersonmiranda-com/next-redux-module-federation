import { EnhancedStore } from "@reduxjs/toolkit";

interface AsyncReducers {
  [key: string]: any;
}

export interface DynamicStore extends EnhancedStore {
  asyncReducers: AsyncReducers;
  injectReducer: (key: string, asyncReducer: any) => void;
}
