type Props = {
  label: string;
  cardTitle: string;
  cardDesc: string;
  title: string;
  lead: string;
  points?: { title: string; desc: string }[];
  notice: { title: string; body: string };
};

/** A dark statement card beside a white card that backs the statement up. */
const TrustPanel = ({ label, cardTitle, cardDesc, title, lead, points, notice }: Props) => (
  <div className="flex flex-wrap gap-3.5">
    <div className="flex flex-[1_1_340px] flex-col justify-between gap-20 rounded-[28px] bg-ink px-8 py-11 text-white sm:px-10">
      <div className="text-[11px] font-medium uppercase tracking-[0.36em] text-ink-faint">{label}</div>
      <div>
        <div className="mb-3.5 text-[32px] font-light leading-[1.1] tracking-[-0.035em]">{cardTitle}</div>
        <p className="text-[14px] leading-[1.65] text-[#bdbdba]">{cardDesc}</p>
      </div>
    </div>

    <div className="flex-[2_1_520px] rounded-[28px] bg-white px-6 py-11 sm:px-10">
      <h2 className="mb-4 text-[clamp(28px,3.4vw,42px)] font-light leading-[1.1] tracking-[-0.04em]">{title}</h2>
      <p className="mb-9 text-[15px] leading-[1.7] text-ink-muted">{lead}</p>
      {points && (
        <div className="mb-9 grid gap-x-8 gap-y-7 [grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))]">
          {points.map((point) => (
            <div key={point.title}>
              <h3 className="mb-1.5 text-[15px] font-medium">{point.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-muted">{point.desc}</p>
            </div>
          ))}
        </div>
      )}
      {/* Kept as a plain notice, never styled as a seal: it states what is not yet certified. */}
      <div className="rounded-[18px] bg-mist px-[22px] py-[18px]">
        <div className="mb-1 text-[13px] font-medium">{notice.title}</div>
        <p className="text-[12.5px] leading-[1.6] text-ink-muted">{notice.body}</p>
      </div>
    </div>
  </div>
);

export default TrustPanel;
