import type { CSSProperties } from "react";

type Props = {
  headers?: string[];
  rows?: Array<Array<string | number>>;
  striped?: boolean;
  style?: CSSProperties;
};

export default function TableElement({
  headers = [],
  rows = [],
  striped = true,
  style
}: Props) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        ...style
      }}>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={`${header}-${index}`} style={{
                  padding: 12,
                  background: "#f1f5f9",
                  borderBottom: "1px solid #cbd5e1"
                }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{
              background: striped && rowIndex % 2 === 1 ? "#f8fafc" : "#fff"
            }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{
                  padding: 12,
                  borderBottom: "1px solid #e5e7eb"
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
