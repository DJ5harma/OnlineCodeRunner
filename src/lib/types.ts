export interface CUser {
	username: string;
	email: string;
	user_id: string;
	createdAt: Date;
	updatedAt: Date;
}
export interface IRun {
	title: string;
	description?: string;
	runner: string;
	extension: 'java' | 'cpp' | 'py' | 'js';
	status: 'success' | 'pending' | 'running' | 'error';
	output: string;
	mode: 'everyday' | 'delay' | 'now';
	createdAt: Date;
	updatedAt: Date;
}
