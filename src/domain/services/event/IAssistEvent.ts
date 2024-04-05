export interface IAssistEvent {
  assistEvent(userId: number, data: any): Promise<any>;
}