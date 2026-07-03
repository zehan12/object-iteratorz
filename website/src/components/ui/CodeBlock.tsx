import React, { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
}

export function CodeBlock({ code, lang = 'typescript', className }: CodeBlockProps) {
  const [html, setHtml] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function highlight() {
      try {
        const result = await codeToHtml(code, {
          lang,
          theme: 'github-dark',
        });
        setHtml(result);
      } catch (e) {
        console.error("Failed to highlight code", e);
        // Fallback
        setHtml(`<pre><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`);
      }
    }
    highlight();
  }, [code, lang]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group rounded-lg overflow-hidden my-4 border bg-zinc-950", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <span className="text-xs font-medium text-zinc-400 lowercase">{lang}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <div 
        className="p-4 overflow-x-auto text-sm [&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!p-0"
        dangerouslySetInnerHTML={{ __html: html || `<pre><code>...</code></pre>` }}
      />
    </div>
  );
}
