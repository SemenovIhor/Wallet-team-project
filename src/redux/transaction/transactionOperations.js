import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionAPI from '../../service/transactionApi';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await transactionAPI.getAllTransactions();
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//
const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await transactionAPI.postAddTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, { rejectWithValue }) => {
    try {
      await transactionAPI.deleteTransaction(transactionId);
      return transactionId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await transactionAPI.updateTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await transactionAPI.getTransactionCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSumTransactions = createAsyncThunk(
  'transactions/getSumTransactions',
  async (query, { rejectWithValue }) => {
    try {
      const sum = await transactionAPI.getTransactionsSum(query);
      return sum;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getCategories,
  getSumTransactions,
};
export default operations;
