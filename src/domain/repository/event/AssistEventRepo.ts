export interface AssistEventRepo {
    assistEvent(userId: number, eventId: number): Promise<any>;
}