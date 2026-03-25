"use client";

type DateTextProps = {
  date: string | Date;
};

export function DateText({ date }: DateTextProps) {
  return <span>{new Date(date).toLocaleString("no-NO")}</span>;
}
