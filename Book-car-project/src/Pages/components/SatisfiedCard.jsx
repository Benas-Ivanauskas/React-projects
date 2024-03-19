function SatisfiedCard({ icon, count, description }) {
  const Icon = icon;

  return (
    <div className="card">
      <Icon className="card-icon" />
      <div>
        <h3>{count}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SatisfiedCard;
