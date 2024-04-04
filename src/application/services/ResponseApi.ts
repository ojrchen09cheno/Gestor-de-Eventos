export class ResponseApi{
  statusCode: number;
  success: boolean;
  message: string;
  data: {}

  constructor(statusCode: number, success: boolean, message: string, data: {}) {
      this.statusCode = statusCode;
      this.success = success;
      this.message = message;
      this.data = data;
    }
}