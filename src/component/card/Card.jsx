export const Card = () => {
  return (
    <div
      style={{ maxWidth: "45rem", width: "100%" }}
      className="accordion-item border-0 rounded-4 shadow-sm"
    >
      <h2 className="accordion-header rounded-4">
        <button
          className="accordion-button bg-white rounded-4 text-primary fw-bold shadow-none title"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#acordion${id}`}
          aria-expanded="true"
          aria-controls={`acordion${id}`}
        >
          {title}
        </button>
      </h2>
      <div id={`acordion${id}`} className="accordion-collapse collapse">
        <div className="accordion-body pt-0 text-green-300">
          <p className="border-2 border-top border-primary pt-3">{content}</p>
        </div>
      </div>
    </div>
  );
};
