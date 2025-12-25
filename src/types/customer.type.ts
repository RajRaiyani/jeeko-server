import constant from '@/config/constant';

export interface CustomerCustomAlertSchema {
  id: string;
  name: string;
  customer_id: string;
  message?: string;
  description?: string;
  field_name: string;
  operator: (typeof constant.customerAlertOperators)[number];
  value: number;
}
