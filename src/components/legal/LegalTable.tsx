import type { ReactNode } from "react";

/** Plain bordered table for legal pages; cells wrap so it never widens the page. */
const LegalTable = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="mt-4 overflow-x-auto rounded-[14px] border border-black/10">
    <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] [overflow-wrap:anywhere] leading-[1.6]">
      <thead className="bg-mist text-ink">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-2.5 py-2 font-medium sm:px-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t border-black/10 align-top">
            {row.map((cell, j) => (
              <td key={j} className="px-2.5 py-2 sm:px-3">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LegalTable;
