interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="mt-1 text-xs italic text-color-red">{message}</p>;
}
