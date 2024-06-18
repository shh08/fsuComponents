export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface ButtonProps {
  /**
   * Set this to change Button kind
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}