import * as AppServices from '../../application/services/index'
import { CreateEventPG } from '../repositories/postgres/adapter/createEventPG'
import * as Adapter from '../repositories/postgres/adapter/index'

export const assistEventD = new AppServices.AssistEventApp(new Adapter.AssistEventPG)
export const checkEventD = new AppServices.CheckEventApp(new Adapter.CheckEventPG)
export const createEventD = new AppServices.CreateEventApp(new CreateEventPG)
export const deleteEventD = new AppServices.DeleteEventApp(new Adapter.DeleteEventPG)
export const editEventD = new AppServices.EditEventApp(new Adapter.EditEventPG)
export const getAllEventsD = new AppServices.GetAllEventsApp(new Adapter.GetAllEventsPG)
export const leaveEventD = new AppServices.LeaveEventApp(new Adapter.LeaveEventPG)
export const registerD = new AppServices.RegisterApp(new Adapter.RegisterPG)
export const loginD = new AppServices.LoginApp(new Adapter.LoginPG)