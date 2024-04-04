export interface IAssistEvent {
  assisstEvent(userId:number, eventId:number): Promise<any>;
}