export default function TitleParaBox({
  title,
  para,
  bulletPts,
}: {
  title: string;
  para?: string;
  bulletPts?: string[];
}) {
  const handleBold = (text: string) => {
    const boldText = text.substring(0, text.indexOf(":") + 1);
    const restText = text.substring(text.indexOf(":") + 1);
    return (
      <>
        <span className="font-bold">{boldText}</span>
        {restText}
      </>
    );
  };
  return (
    <div className="mb-10 md:mb-0">
      <h1 className="mb-6 text-center text-lg md:text-xl font-bold text-white uppercase">
        {title}
      </h1>
      {para ? (
        <p className="text-center md:text-justify text-xl font-medium leading-7 text-white">
          {para}
        </p>
      ) : bulletPts ? (
        <div className="text-justify text-xl font-medium leading-7 text-white">
          {bulletPts?.map((point, i) => <li key={i}>{handleBold(point)}</li>)}
        </div>
      ) : null}
    </div>
  );
}
