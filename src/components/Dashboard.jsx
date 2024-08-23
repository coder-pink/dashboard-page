import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';
import SearchBar from './SearchBar';
import '../assets/dashBoardData.json'

const Dashboard = () => {
  const categories = useSelector(state => state.categories);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className='mb-2 flex  justify-between items-center'>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 inline-block">Dashboard</h1>
      <SearchBar/>
      </div>
      
      <div className="space-y-4">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="mt-8">
        <AddWidgetForm />
      </div>
    </div>
  );
};

export default Dashboard;

