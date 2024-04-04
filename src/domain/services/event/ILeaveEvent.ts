export interface ILeaveEvent{
  leaveEvent(userId: number, eventId: number): Promise<any>;
}