import React, { useCallback } from "react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function TableSearchInput({
  placeholder,
}: {
  placeholder?: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = React.useState(search);
  // Debounce the search input
  const [debouncedValue] = useDebounce(searchTerm, 1000);

  const handleSettingSearchParams = useCallback(
    (newSearchValue: string) => {
      // Update the URL with the new search value
      if (!newSearchValue) {
        searchParams.delete("search");
        setSearchParams(searchParams);
        return;
      }
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: "1", // Reset to page 1 on new search
        search: newSearchValue,
      });
    },
    [searchParams, setSearchParams]
  );

  React.useEffect(() => {
    handleSettingSearchParams(debouncedValue);
  }, [debouncedValue, handleSettingSearchParams]);

  return (
    <Input
      placeholder={placeholder || "Search by name, gmail, or role..."}
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      className="w-full md:max-w-sm"
    />
  );
}
