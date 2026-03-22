interface LotusIconProps {
  className?: string;
  size?: number;
}

export default function LotusIcon({ className = "", size = 40 }: LotusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center petal */}
      <path
        d="M32 8C32 8 26 24 26 36C26 42 28.5 46 32 48C35.5 46 38 42 38 36C38 24 32 8 32 8Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* Left petal */}
      <path
        d="M32 48C32 48 18 38 14 30C12 26 13 22 16 20C19 22 22 28 32 48Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Right petal */}
      <path
        d="M32 48C32 48 46 38 50 30C52 26 51 22 48 20C45 22 42 28 32 48Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Far left petal */}
      <path
        d="M32 48C32 48 12 42 8 36C6 33 7 29 10 28C13 29 18 34 32 48Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Far right petal */}
      <path
        d="M32 48C32 48 52 42 56 36C58 33 57 29 54 28C51 29 46 34 32 48Z"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Base */}
      <path
        d="M24 52C26 50 29 48 32 48C35 48 38 50 40 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
