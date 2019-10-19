export interface Reward {
  id: number;
  name: string;
  description: string;
  point: number;
  status: 'none' | 'finished' | 'approved';
  createdAt: Date;
}
