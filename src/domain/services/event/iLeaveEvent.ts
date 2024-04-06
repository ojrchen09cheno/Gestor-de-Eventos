export interface ILeaveEvent{
  leaveEvent(userId: number, data: any): Promise<any>;
}