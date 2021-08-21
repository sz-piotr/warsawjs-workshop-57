interface Props<T> {
  options: T[];
  onSelect: (option: T) => void;
}

export function MysteryBoxes<T>({ options, onSelect }: Props<T>) {
  return (
    <ul>
      {options.map((x, i) => (
        <li key={i}>
          <button onClick={() => onSelect(x)}>#{i + 1}</button>
        </li>
      ))}
    </ul>
  );
}
