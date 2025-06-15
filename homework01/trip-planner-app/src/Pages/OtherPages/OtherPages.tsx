import "./OtherPages.css";

interface PageProps {
  title: string;
}

function OtherPages({ title }: PageProps) {
  return (
    <div className="OtherPages">
      <h1>{title}</h1>;
    </div>
  );
}

export default OtherPages;
