export default function TitlePara({
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
    <div>
      <h1 className="mb-6 text-center text-3xl font-semibold text-white">
        {title}
      </h1>
      {para ? (
        <p className="text-center text-xl font-medium leading-7 text-white">
          {para}
        </p>
      ) : bulletPts ? (
        <div className="text-center text-xl font-medium leading-7 text-white">
          {bulletPts?.map((point, i) => <li key={i}>{handleBold(point)}</li>)}
        </div>
      ) : null}
    </div>
  );
}
