import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/dashBoardData.json';

const initialState = data.categories;

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = categorySlice.actions;
export default categorySlice.reducer;
