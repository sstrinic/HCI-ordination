"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CategoryFilter = () => {
  const searchParams = useSearchParams();
  const categoryFilter: string = searchParams.get("_category") || "";
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParam = useCallback(
    (name: string, value: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.set(name, value);
      if (currentParams === params.toString()) return;

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenValue = event.target.value;
    setSearchParam("_category", chosenValue);
  };

  return (
    <label className="block text-gray-700 mb-2">
      <span className="text-2xl font-semibold">Filter by Label:</span>
      <select
        className="mt-1 block w-full p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
        onChange={handleSelectChange}
        value={categoryFilter}
      >
        <option value="">All</option>
        <option value="other">Other</option>
        <option value="health">Health</option>
        <option value="world">World</option>
        <option value="local">Local</option>
      </select>
    </label>
  );
};

export default CategoryFilter;
