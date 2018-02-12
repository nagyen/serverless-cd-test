import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { AuthService } from '../Shared/AuthService';

export const user: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Message from User service! User Authenticated: ${ new AuthService().IsAuthenticated()}`,
      input: event,
    }),
  };

  cb(null, response);
}
