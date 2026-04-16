/**
 * Struttura generale del content.
 *
 * Possibili casi:
 * - stringa semplice
 * - array di paragrafi
 * - blocchi con type
 * - tabelle
 * - liste
 * - html raw
 */

type ContentBlock = []
  | string
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | TableBlock
  | HtmlBlock;

type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

type HeadingBlock = {
  type: "heading";
  text: string;
  level?: 1 | 2 | 3;
};

type ListBlock = {
  type: "list";
  items: string[];
  ordered?: boolean;
};

type TableBlock = {
  type: "table";
  title?: string;
  headers: string[];
  rows: Array<Array<string | number>>;
};

type HtmlBlock = {
  type: "html";
  content: string;
};


type LineBlock = {
  type: "line";
  content: string;
};

/**
 * Casistiche da ricordare:
 *
 * 1. Alcune voci potrebbero avere solo testo semplice
 * 2. Alcune potrebbero avere paragrafi + heading
 * 3. Alcune potrebbero richiedere html per grassetti o layout particolari
 * 4. Le tabelle potrebbero comparire solo in alcune sezioni
 * 5. In futuro si potrebbe unificare tutto in blocchi con `type`
 */