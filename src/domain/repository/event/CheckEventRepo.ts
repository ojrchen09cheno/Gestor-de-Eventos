export interface CheckEventRepo{
  checkEvent(eventId: number): Promise<any>;
}