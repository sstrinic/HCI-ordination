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
    <label className="flex md:flex-col text-gray-700 mb-2 max-w-[20rem]">
      <span className="md:text-2xl text-xl font-semibold self-center">Filter<span className="max-md:hidden"> by Label</span>:&nbsp;</span>
      <select
        className="mt-1 p-2 md:mx-auto md:w-[8rem] rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
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
