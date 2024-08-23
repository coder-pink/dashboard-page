
import { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import { FaPlus } from 'react-icons/fa';

const Category = ({ category }) => {
  const [isFormVisible, setIsFormVisible] = useState(false); 

  const handleAddClick = () => {
    setIsFormVisible(!isFormVisible); 
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-lg">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 mt-6 bg-green-600 text-white rounded-full hover:bg-green-500"
            onClick={handleAddClick} 
          >
            <FaPlus />
          </button>
          {isFormVisible && (
            <div className="flex-grow">
              <AddWidgetForm categoryId={category.id} />
            </div>
          )}
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;


