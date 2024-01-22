import { IAppContext } from '../contexts/AppContext';

import { User } from '../types/User';

class AppClient implements IAppContext {
	user: User;

	/**
	 * Creates an instance of AppClient.
	 * @memberof AppClient
	 */
	constructor() {
		this.user = {
			id: '1',
			name: 'Thiago Watanabe',
			email: 'thiagowatanabe@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date(),
			isAdmin: true,
			isActive: true,
			isVerified: true,
		};
	}
}

export default AppClient;