export interface IDeleteEvent {
  deleteEvent(eventId: number): Promise<any>;
}