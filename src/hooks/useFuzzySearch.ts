// hooks/useFuzzySearch.ts
import { useMemo, useState } from "react";
import Fuse, { IFuseOptions } from "fuse.js"; // update this import path
import { ProvinceMosqueData } from "../data/mosques-by-province";

export function useFuzzySearch(
  data: ProvinceMosqueData[],
  options?: IFuseOptions<ProvinceMosqueData>
) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: [
        "provinceName", // province name key
        "overview", // search in overview text too
        "mosques.name", // mosque names
        "mosques.description", // mosque description
        "mosques.tags", // mosque tags array
        "mosques.services", // mosque services array
        "mosques.address.street", // mosque address street
        "mosques.imam.name",
      ],
      threshold: 0.3,
      ignoreLocation: true,
      includeScore: false,
      ...options,
    });
  }, [data, options]);

  const results = useMemo(() => {
    if (!query.trim()) return data;
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse, data]);

  return {
    results,
    query,
    setQuery,
  };
}
