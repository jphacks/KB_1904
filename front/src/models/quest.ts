export interface Quest {
  id: number;
  title: string;
  description: string;
  point: number;
  questType: 'daily' | 'weekly' | 'emergency';
  status: 'none' | 'finished' | 'approved';
}
