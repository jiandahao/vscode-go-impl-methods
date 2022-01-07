import { Range } from 'vscode';

export interface Receiver {
  name: string
  type_: string
  kind: string
  range: Range | undefined
}