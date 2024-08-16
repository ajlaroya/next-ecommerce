const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-3 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100 ring-gray-400"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Min price"
          className="text-xs rounded-md pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="Max price"
          className="text-xs rounded-md pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100"
        >
          <option value="">Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100"
        >
          <option value="">Colour</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100"
        >
          <option value="">Category</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100"
        >
          <option value="">All Filters</option>
        </select>
      </div>
      <div className="">
        <select name="" id="" className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100 ring-gray-400">
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
