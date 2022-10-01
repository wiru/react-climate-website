
export const Dropdown = () => { 
  return (
  <div className="flex flex-row items-center relative w-full">
    <select className="w-full p-2 text-gray-600 bg-white rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 pointer-events-auto">
      <option>data set 1</option>
      <option>data set 2</option>
      <option>data set 3</option>
      <option>data set 4</option>
    </select>
    <div className="absolute right-0 p-3 pointer-events-none">Add Icon</div>
  </div>
)}