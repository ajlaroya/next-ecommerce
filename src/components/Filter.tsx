"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-3 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100 ring-gray-400"
          onChange={handleFilterChange}
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
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="Max price"
          className="text-xs rounded-md pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100"
          onChange={handleFilterChange}
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
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-gray-100 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
