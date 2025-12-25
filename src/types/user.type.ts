import constant from '@/config/constant';

export interface UserCustomAlertSchema {
  id: string;
  name: string;
  user_id: string;
  message?: string;
  description?: string;
  field_name: string;
  operator: (typeof constant.userAlertOperators)[number];
  value: number;
}
