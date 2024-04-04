export interface LeaveEventRepo{
  leaveEvent(userId: number, eventId: number): Promise<Boolean>;
}