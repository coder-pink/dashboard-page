import { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector(state => state.categories);

  const filteredWidgets = categories.flatMap(category =>
    category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 relative">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
      />
      {searchTerm && (
        <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-auto">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map(widget => (
              <li
                key={widget.id}
                className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                {widget.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No widgets found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

