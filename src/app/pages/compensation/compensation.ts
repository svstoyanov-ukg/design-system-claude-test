import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Reimbursement {
  id: string;
  title: string;
  type: string;
  date: string;
  amount: number;
  status: 'received' | 'pending';
}

export interface CompensationData {
  userName: string;
  balanceLeft: number;
  category: string;
  reimbursements: Reimbursement[];
}

@Component({
  selector: 'app-compensation',
  standalone: true,
  templateUrl: './compensation.html',
})
export class CompensationComponent {
  constructor(private router: Router) {}

  readonly user: CompensationData = {
    userName: 'Jordan Rivera',
    balanceLeft: 1200.0,
    category: 'Compensation',
    reimbursements: [
      {
        id: '1',
        title: 'Home office equipment',
        type: 'Reimbursement',
        date: 'Jun 12, 2026',
        amount: 349.99,
        status: 'received',
      },
      {
        id: '2',
        title: 'Professional certification',
        type: 'Reimbursement',
        date: 'Jun 25, 2026',
        amount: 250.0,
        status: 'pending',
      },
      {
        id: '3',
        title: 'Wellness subscription',
        type: 'Reimbursement',
        date: 'May 30, 2026',
        amount: 89.0,
        status: 'received',
      },
      {
        id: '4',
        title: 'Learning & development course',
        type: 'Reimbursement',
        date: 'Jul 10, 2026',
        amount: 199.0,
        status: 'pending',
      },
    ],
  };

  get initials(): string {
    return this.user.userName
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
