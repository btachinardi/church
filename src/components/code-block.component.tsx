import { CopyButton } from './copy-button.component';

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className = '' }: CodeBlockProps) {
  return (
    <div
      className={`flex items-center justify-between gap-2 overflow-x-auto rounded-md bg-black/50 px-4 py-3 ${className}`}
    >
      <code className="font-mono text-sm text-parchment">{code}</code>
      <CopyButton text={code} />
    </div>
  );
}
