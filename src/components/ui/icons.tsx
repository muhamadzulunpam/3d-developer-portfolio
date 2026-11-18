import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 20V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M14 5h5v5M19 5l-8 8" />
      <path {...stroke} d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.8 8.3 6.8 9.6.5.1.7-.2.7-.6v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 3 1.1a7.3 7.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.2-2.4 5.1-4.7 5.4.4.4.7 1 .7 2v3c0 .4.2.7.7.6 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 8.5H2.5V21h2.48V8.5Zm.2-3.9C5.2 3.6 4.4 3 3.3 3S1.4 3.6 1.2 4.6c0 1 .8 1.6 1.9 1.6h.2c1.1 0 1.9-.6 1.9-1.6ZM21 13.6c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3 1.7V8.5H11.6V21h2.5v-6.5c0-1.7 1-2.5 2-2.5s1.9.7 1.9 2.6V21H21v-7.4Z"
      />
      <path fill="currentColor" d="M8.3 8.5h2.45V21H8.3V8.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M3 7.5h18v9H3v-9Z" />
      <path {...stroke} d="M3.5 8l8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <path {...stroke} d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M8.5 8.5 4 12l4.5 3.5M15.5 8.5 20 12l-4.5 3.5M13.5 5l-3 14" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z" />
      <path {...stroke} d="M3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 8.2c4.1 0 7.5-1.1 7.5-2.6S16.1 3 12 3 4.5 4.1 4.5 5.6 7.9 8.2 12 8.2Z" />
      <path {...stroke} d="M4.5 5.6v12.8c0 1.5 3.4 2.6 7.5 2.6s7.5-1.1 7.5-2.6V5.6" />
      <path {...stroke} d="M4.5 12c0 1.5 3.4 2.6 7.5 2.6s7.5-1.1 7.5-2.6" />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path {...stroke} d="M6 10.6V15c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-4.4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M4 9.5h16v9H4v-9Z" />
      <path {...stroke} d="M9 9.5V7a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 7v2.5M4 13.5h16" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M5 13l4 4 10-10" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...stroke} d="M12 4.5 21 19.5H3L12 4.5Z" />
      <path {...stroke} d="M12 10v4M12 16.7v.3" />
    </svg>
  );
}
