import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../redux/categorySlice';
import { FaTimes } from 'react-icons/fa';

const AddWidgetForm = () => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText && selectedCategory) {
      dispatch(addWidget({
        categoryId: selectedCategory,
        widget: { id: Date.now().toString(), name: widgetName, text: widgetText }
      }));
      setWidgetName('');
      setWidgetText('');
      setSelectedCategory('');
      setIsFormVisible(false); // Hide form after submission
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="mt-6 relative">
      <button 
        onClick={toggleFormVisibility} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center"
      >
        {isFormVisible ? <FaTimes className="mr-2" /> : 'Add Widget'}
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 p-5 ">
          <div className="relative mt-4 p-4 space-y-6 bg-white border border-black rounded-lg shadow-md max-w-md mx-4">
            <button 
              onClick={toggleFormVisibility} 
              className="absolute top-2 right-5  text-gray-700 hover:text-gray-900"
            >
              <FaTimes />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
              >
                Add Widget
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWidgetForm;
