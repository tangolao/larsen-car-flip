import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Brødsmuler" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-medium transition hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "font-medium text-gray-900" : "font-medium"
                  }
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="text-gray-300">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
