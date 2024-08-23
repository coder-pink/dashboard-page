import { useDispatch } from 'react-redux';
import { removeWidget, addWidget } from '../redux/categorySlice';
import { FaPlus, FaTrash } from 'react-icons/fa'; 

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ widgetId: widget.id, categoryId }));
  };

  const handleAdd = () => {
    const newWidget = {
      id: Date.now().toString(), 
      name: 'New Widget',
      text: 'This is a newly added widget.'
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md transition-transform transform hover:-translate-y-1">
      <h3 className="text-lg font-medium text-gray-800 mb-2">{widget ? widget.name : 'Empty Widget Box'}</h3>
      <p className="text-gray-600">{widget ? widget.text : 'Click the + icon to add a widget.'}</p>
      <div className="flex mt-3 space-x-2">
        {widget ? (
          <button
            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            onClick={handleRemove}
          >
            <FaTrash />
          </button>
        ) : (
          <button
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            onClick={handleAdd}
          >
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default Widget;

