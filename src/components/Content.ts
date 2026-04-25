/**
 * Struttura generale del content.
 *
 * Direzione del progetto:
 * - i dataset piu' recenti tendono a usare blocchi strutturati
 * - i dataset legacy possono ancora fare fallback su html raw
 * - il renderer deve supportare testo, liste, heading, linee tecniche e tabelle
 */

type InlineText =
  | string
  | {
      type: "text" | "bold" | "italic";
      text: string | InlineText[];
    }
  | {
      type: "lineBreak";
    };

type ParagraphBlock = {
  type: "paragraph";
  text: InlineText | InlineText[];
};

type HeadingBlock = {
  type: "heading";
  text: InlineText | InlineText[];
  level?: 1 | 2 | 3;
};

type ListBlock = {
  type: "list";
  items: Array<InlineText | InlineText[]>;
  ordered?: boolean;
};

type LineBlock = {
  type: "line";
  label?: InlineText | InlineText[];
  text: InlineText | InlineText[];
};

type TableBlock = {
  type: "table";
  title?: InlineText | InlineText[];
  headers: Array<InlineText | InlineText[]>;
  rows: Array<Array<InlineText | InlineText[] | number>>;
};

type TableRefBlock = {
  type: "tableRef";
  index?: number;
  placeholder?: string;
  title?: InlineText | InlineText[];
};

type HtmlBlock = {
  type: "html";
  content: string;
};

type ContentBlock =
  | string
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | LineBlock
  | TableBlock
  | TableRefBlock
  | HtmlBlock;

type Content = ContentBlock[];
