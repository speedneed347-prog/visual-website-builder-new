
import React from "react";

interface ElementSearchProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function ElementSearch({
  value,
  onChange,
}: ElementSearchProps) {
  const [internalValue, setInternalValue] = React.useState("");

  const searchValue = value ?? internalValue;

  function handleChange(nextValue: string) {
    setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  return (
    <div className="element-search">
      <input
        type="search"
        value={searchValue}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search elements..."
        aria-label="Search elements"
      />
      {searchValue && (
        <button
          type="button"
          onClick={() => handleChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
