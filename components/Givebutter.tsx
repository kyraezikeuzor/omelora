declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        id: string;
      };
    }
  }
}

export default function Givebutter() {
  return (
    <div className="min-w-[440px]">
      <givebutter-widget id="pQy3Np"></givebutter-widget>
    </div>
  );
}
