export default function LearMoreText({ Icon, text }) {
  return (
    <div className="learnMoreText">
      <Icon />
      <p>{text}</p>
    </div>
  );
}
