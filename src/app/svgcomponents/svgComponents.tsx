export function EllipseComponent({
  color,
  className,
  width,
}: {
  color: string;
  className: string;
  width?: string;
}) {
  return (
    <svg
      className={className}
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse 1"
        cx="47.5"
        cy="47.5"
        r="45.5"
        stroke={color}
        strokeWidth={width ? width : "4"}
      />
    </svg>
  );
}

export function EdgeComponent({
  color,
  className,
}: {
  color: string;
  className: string;
}) {
  return (
    <svg
      className={className}
      width="53"
      height="57"
      viewBox="0 0 53 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 2">
        <rect
          id="Rectangle 3"
          x="52.193"
          y="56.7743"
          width="19.925"
          height="45.8046"
          transform="rotate(-179.409 52.193 56.7743)"
          fill={color}
        />
        <rect
          id="Rectangle 4"
          width="19.915"
          height="51.8971"
          transform="matrix(-0.00511352 0.999987 -0.999987 -0.00511872 52.667 0.776184)"
          fill={color}
        />
      </g>
    </svg>
  );
}

export function Xmark({
  color,
  className,
}: {
  color: string;
  className: string;
}) {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 4">
        <rect
          id="Rectangle 4"
          width="7.20445"
          height="26.0388"
          transform="matrix(0.682873 -0.730537 -0.732764 -0.680483 20.0018 23.9839)"
          fill={color}
        />
        <rect
          id="Rectangle 5"
          width="7.20833"
          height="26.0247"
          transform="matrix(0.794266 0.60757 0.61008 -0.79234 2.29749 20.6204)"
          fill={color}
        />
      </g>
    </svg>
  );
}

export function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}
