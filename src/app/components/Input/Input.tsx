import styles from "./input.module.css";

interface Props {
  type?: string;
  name: string;
  placeholder?: string;
}

export default function Input({ type = "text", name, placeholder }: Props) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={[styles.input, 'mt-4'].join(" ")}
    />
  );
}
