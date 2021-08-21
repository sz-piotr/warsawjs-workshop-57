interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function Rating({ value, onChange }: Props) {
  return (
    <span>
      {new Array(5).fill(0).map((_, i) => (
        <button
          style={{ color: i < value ? "yellow" : "black" }}
          onClick={() => onChange(i + 1)}
        >
          ★
        </button>
      ))}
    </span>
  );
}
