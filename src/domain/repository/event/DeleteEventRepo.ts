export interface DeleteEventRepo{
  deleteEvent(eventId: number): Promise<Boolean>;
}