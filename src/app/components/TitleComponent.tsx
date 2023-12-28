export default function TitleComponent({
  color,
  text,
  textSize,
}: {
  color: string;
  text: string;
  textSize?: string;
}) {
  return (
    <div
      className={`min-w-32 relative m-8 ml-0 flex h-12 w-fit items-center justify-center rounded-xl border-2 p-2 text-xl font-bold text-white ${color}`}
    >
      {text}
    </div>
  );
}
